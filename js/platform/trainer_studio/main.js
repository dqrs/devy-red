// Global vars

// TODO: Change this trainer variable name given by student
window.t = false 

window.db = false
window.user = false
window.token = false

window.guiSetup = false
window.testResults = {}

window.testQueue = []
window.testHarnesses = []

// App Entry Point
window.onload = function() {
  initTestHarnesses()
  initApp()
} 

function initApp() {
  // Import student's Trainer
  // TODO: Add try/catch to handle syntax errors
  t = getTrainer()
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkfHrjTE9jevhoE3PcI-biQFrbiaPHuDo",
    authDomain: "project-3047158032960725719.firebaseapp.com",
    databaseURL: "https://project-3047158032960725719.firebaseio.com",
    storageBucket: "",
  }
  firebase.initializeApp(config);

  db = firebase.database()

  firebase.auth().onAuthStateChanged(function(_user) {
    if (_user) {
      // User is signed in
      user = _user
      db.ref(`users`).once(`value`).then(initUser)
    } else {
      // User is not signed in, so create sign-in popup
      var provider = new firebase.auth.GithubAuthProvider()
      provider.addScope('email')

      firebase.auth().signInWithPopup(provider).then(
        handleLoginSuccess
      ).catch(
        handleLoginError
      )
    }
  })
}

function handleLoginSuccess(result) {
  // Use token to access the GitHub API.
  token = result.credential.accessToken
  // The signed-in user info.
  user = result.user

  db.ref(`users`).once(`value`).then(initUser)
}

function initUser(usersSnapShot) {
  // clearUserData() // remove eventually (just for debugging)
  
  // if user doesn't already exist in db, 
  // then initialize the new user with base data
  if (!usersSnapShot.hasChild(user.uid)) {
    // alert("Initializing new user")
    setupNewUser()
  }

  // store global reference to course data in user
  // then set up the UI with course data
  db.ref('courses/' + user.uid).on('value', function (courseSnapshot) {
    user.course = courseSnapshot.val()
    if (!guiSetup) {
      setupGUI()
      guiSetup = true
    }
  })
}

function setupNewUser() {
  var userData = {}
  userData.name = user.displayName
  db.ref('users/' + user.uid).set(userData)  
  db.ref('courses/' + user.uid + '/panels').set(panels)
  db.ref('courses/' + user.uid + '/features').set(features)
}

function handleLoginError(error) {
  _error = error
  // Handle Errors here.
  var errorfCode = error.code
  var errorMessage = error.message
  
  // The email of the user's account used.
  var email = error.email
  
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential
  
  alert("Something went wrong logging you in. Please refresh the page and try again.")
}

function savePanelToDB(panel) {
  var panelPath = `courses/${user.uid}/panels/${panel.id}/`
  db.ref(panelPath).update(panel)
}

function saveExpressionEnteredToDB(expressionEntered, status, featureId) {
  var featurePath = `courses/${user.uid}/features/${featureId}`
  
  // save expressionEntered to db if supplied (otherwise, just update status)
  if (expressionEntered) {
    db.ref(featurePath).child('expressionEntered').set(expressionEntered)
  }
  // save status to db
  db.ref(featurePath).child('status').set(status)
  if (status === "executed correct") {
    db.ref(featurePath).child('complete').set(true)
    // NOTE, this will never set complete to false...
    // Probably want to reconsider this in case student
    // breaks feature
  }
}

function clearUserData(event) {
  if (event) {
    event.stopImmediatePropagation()
  }
  db.ref('users/' + user.uid).set(null)
  db.ref('courses/' + user.uid).set(null)
  location.reload()
}

// TODO: REimplement this
function checkForPanelCompletion() {
  // check to see if this completes the panel
  // var panel = user.course.panels[panelId]
  // if (panel && !panel.complete && panelIsComplete(panel)) {
    
  //   alert(`${panel.title} completed!`)
    
  //   // check for newly unlocked panels and re-render UI 
  //   var postReqs = getPostReqsOfPanel(panelId)
  //   // alert(`postReqs: ${JSON.stringify(postReqs)}`)

  //   for (var i=0; i < postReqs.length; i++) {
  //     createPanel($(`#${postReqs[i]}`))
  //   }
  // }
}

function featureIsComplete(feature) {
  return feature.status === "executed correct"
}

function panelIsComplete(panel) {
  var panelComplete = true
  for (var i=0; i < panel.features.length; i++) {
    if (!featureIsComplete(panel.features[i])) {
      panelComplete = false
      break
    }
  }
  panel.complete = panelComplete
  savePanelToDB(panel)
  return panel.complete
}

function panelIsLocked(panel) {
  var stayLocked = false

  if (panel.prereqs) {
    for (var i=0; i < panel.prereqs.length; i++) {
      var prereq = user.course.panels[panel.prereqs[i]]
      if (!prereq.complete) {
        stayLocked = true
        break
      }
    }
  }

  // check if panel was just unlocked for the first time
  if (panel.locked && !stayLocked) {
    panel.locked = false
    savePanelToDB(panel)
    // alert(`${panel.title} was just unlocked!`)
  }

  return stayLocked
}

// Returns an array of panelIDs who have panelId as a prereq
function getPostReqsOfPanel(panelId) {
  var allPanelIDs = Object.keys(user.course.panels)
  var postReqs = []
  for (var i=0; i < allPanelIDs.length; i++) {
    var panel = user.course.panels[allPanelIDs[i]]
    if (panel.prereqs && panel.prereqs.includes(panelId)) {
      postReqs.push(allPanelIDs[i])
    }
  }
  return postReqs
}

function chatBubble(msg) {
  $('#chatBubble').empty()
  $('#chatBubble').css({left: '150px'})
  $('#chatBubble').append('<div class="newMessage"></div>')

  $('.newMessage').typed({
    strings: [`"${msg}"`],
    typeSpeed: 5,
    showCursor: false
  })
}

function removeChatBubble() {
  $('#chatBubble').empty().css({left: '-500px'})
}

function textToSpeech(msg) {
  var utterance = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[3];
  utterance.text = msg;
  // utterance.voice = voices[t.voice];
  // utterance.voiceURI = 'native';
  // utterance.volume = 1; // 0 to 1
  // utterance.rate = 0.5; // 0.1 to 10
  // utterance.pitch = 1; //0 to 2
  // utterance.lang = 'en-US';

  // utterance.onend = function(e) {
  //   console.log('Finished in ' + event.elapsedTime + ' seconds.');
  // };
  window.speechSynthesis.speak(utterance);
}