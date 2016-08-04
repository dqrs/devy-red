/*
  This JSON object contains the static data for features used by all students.
*/

var stringExp = "(['\"`])\\w+\\1"
var numericExp = "\\d*\\.?\\d+"
var variableExp = "\\w+"
var boolExp = "(?:true)|(?:false)"



// TODO: Individualize these
globalInstrux = {
  "expression-correct": "Correct expression! Click run to continue.",
  "expression-incorrect": "Incorrect! Check your expression carefully, and try again.",
  "execution": 'returned the value below.'
}

features = {
  "getAppIcon": {
    id: "getAppIcon",
    entryInstrux: "Call the function that will return your app's icon filename",
    displayType: 'imageType',
    placeholderText: "App Icon",
    type: "function",
    args: 'num',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "appName": {
    id: "appName",
    entryInstrux: "Read the value of the variable containing your app's name",
    displayType: 'tableType',
    placeholderText: "App Name",
    type: "global_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "appVersion": {
    id: "appVersion",
    entryInstrux: "Read the value of the variable containing your app's version",
    displayType: 'tableType',
    placeholderText: "App Version",
    type: "global_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAppAuthor": {
    id: "getAppAuthor",
    entryInstrux: "Call the function that will return your app's author's full name",
    displayType: 'tableType',
    placeholderText: "App Author",
    entryInstrux: "Call the function that will return your app's author",
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAppLocation": {
    id: "getAppLocation",
    entryInstrux: "Call the function that will construct and return your app's location",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAppMapLink": {
    id: "getAppMapLink",
    entryInstrux: "Call the function that will create a Google Maps link to your app's location",
    displayType: 'linkType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "setBackgroundColor": {
    id: "setBackgroundColor",
    entryInstrux: "Call the function that will set your app's background color to the color given",
    displayType: 'settingType',
    type: "function",
    args: 'str',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "setCodeTagColor": {
    id: "setCodeTagColor",
    entryInstrux: "Call the function that will set the code tag color to the color given",
    displayType: 'settingType',
    type: "function",
    args: 'str',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "setFont": {
    id: "setFont",
    entryInstrux: "Call the function that will set your app's font",
    displayType: 'settingType',
    type: "function",
    args: 'num',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "setWallpaper": {
    id: "setWallpaper",
    entryInstrux: "Call the function that will set your app's wallpaper to the preset given",
    displayType: 'settingType',
    type: "function",
    args: 'num',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "appYear": {
    id: "appYear",
    entryInstrux: "Enter the expression to retreive the variable containing the year your app was created",
    displayType: 'tableType',
    placeholderText: "App Year",
    type: "global_var",
    expressionExpected: "appYear",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAppSeason": {
    id: "getAppSeason",
    entryInstrux: "Call the function that will return the season for the given month",
    displayType: 'tableType',
    placeholderText: "App Season",
    type: "function",
    args: 'num',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAppCredits": {
    id: "getAppCredits",
    entryInstrux: "Call the function that will return your app's credits",
    displayType: 'tableType',
    placeholderText: "App Credits",
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "createTrainer": {
    id: "createTrainer",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    placeholderText: "Pokemon Trainer",
    entryInstrux: "Create a new Trainer and save it to a variable",
    type: "constructor", // TODO: Double check this
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug',
    trainerVar: false
  },
  "firstName": {
    id: "firstName",
    entryInstrux: "Enter the expression that will retrieve your trainer's first name",
    displayType: 'tableType',
    type: "instance_var",
    placeholderText: "First Name",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "lastName": {
    id: "lastName",
    entryInstrux: "Enter the expression that will retrieve your trainer's last name",
    displayType: 'tableType',
    type: "instance_var",
    placeholderText: "Last Name",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "age": {
    id: "age",
    entryInstrux: "Enter the expression that will retrieve your trainer's age",
    displayType: 'tableType',
    type: "instance_var",
    placeholderText: "Age",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "slogan": {
    id: "slogan",
    entryInstrux: "Enter the expression that will retrieve your trainer's slogan",
    displayType: 'tableType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "favoriteElement": {
    id: "favoriteElement",
    entryInstrux: "Enter the expression that will retrieve your trainer's favorite element",
    displayType: 'tableType',
    type: "instance_var",
    placeholderText: "Favorite Element",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "favoriteColor": {
    id: "favoriteColor",
    entryInstrux: "Enter the expression that will retrieve your trainer's favorite color",
    displayType: 'tableType',
    type: "instance_var",
    placeholderText: "Favorite Color",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "energy": {
    id: "energy",
    entryInstrux: "Enter the expression that will retrieve your trainer's energy",
    displayType: 'barType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "happiness": {
    id: "happiness",
    entryInstrux: "Enter the expression that will retrieve your trainer's happiness",
    displayType: 'barType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "confidence": {
    id: "confidence",
    entryInstrux: "Enter the expression that will retrieve your trainer's confidence",
    displayType: 'barType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "intelligence": {
    id: "intelligence",
    entryInstrux: "Enter the expression that will retrieve your trainer's intelligence",
    displayType: 'barType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "strength": {
    id: "strength",
    entryInstrux: "Enter the expression that will retrieve your trainer's strength",
    displayType: 'barType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "coins": {
    id: "coins",
    entryInstrux: "Enter the expression that will retrieve your trainer's coins",
    displayType: 'tableType',
    type: "instance_var",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getFullName": {
    id: "getFullName",
    entryInstrux: "Call the method that will create and return your trainer's 'full name'",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getReverseName": {
    id: "getReverseName",
    entryInstrux: "Call the method that will create and return your trainer's 'reverse name'",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getDoubleFullName": {
    id: "getDoubleFullName",
    entryInstrux: "Call the method that will create and return your trainer's 'double full name'",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getDoubleReverseName": {
    id: "getDoubleReverseName",
    entryInstrux: "Call the method that will create and return your trainer's 'double full name'",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getFirstNameLastInitial": {
    id: "getFirstNameLastInitial",
    entryInstrux: "Call the method that will create and return your trainer's first name followed by their last initial",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getFirstInitialLastName": {
    id: "getFirstInitialLastName",
    entryInstrux: "Call the method that will create and return your trainer's first initial followed by their last name",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getElementWeakestAgainst": {
    id: "getElementWeakestAgainst",
    entryInstrux: "Call the method that will return the element your trainer is weakest against",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getElementStrongestAgainst": {
    id: "getElementStrongestAgainst",
    entryInstrux: "Call the method that will return the element your trainer is strongest against",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAgeInMonths": {
    id: "getAgeInMonths",
    entryInstrux: "Call the method that will calculate and return your trainer's age in months",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAgeInWeeks": {
    id: "getAgeInWeeks",
    entryInstrux: "Call the method that will calculate and return your trainer's age in weeks",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAgeInDays": {
    id: "getAgeInDays",
    entryInstrux: "Call the method that will calculate and return your trainer's age in days",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAgeInHours": {
    id: "getAgeInHours",
    entryInstrux: "Call the method that will calculate and return your trainer's age in hourss",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getAgeInMinutes": {
    id: "getAgeInMinutes",
    entryInstrux: "Call the method that will calculate and return your trainer's age in minutes",
    displayType: 'tableType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  // "getAgeInSeconds": {
  //   id: "getAgeInSeconds",
  //   entryInstrux: "Call the method that will calculate and return your trainer's age in seconds",
  //   displayType: 'tableType',
  //   type: "method",
  //   expressionExpected: "t.getAgeInSeconds()",
  //   expressionEntered: '',
  //   hasReturnValue: true,
  //   status: "expression-empty",
  //   complete: false,
  // mode: 'debug'
  // },
  "writeHi": {
    id: "writeHi",
    entryInstrux: "Call the method that will cause your trainer to write 'hi'",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "writeSlogan": {
    id: "writeSlogan",
    entryInstrux: "Call the method that will cause your trainer to write their slogan",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "write": {
    id: "write",
    entryInstrux: "Call the method that will cause your trainer to write whatever the user inputs",
    displayType: 'triggerType',
    type: "method",
    args: 'str',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "sayHi": {
    id: "sayHi",
    entryInstrux: "Call the method that will cause your trainer to say 'hi' out loud",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "saySlogan": {
    id: "saySlogan",
    entryInstrux: "Call the method that will cause your trainer to say their slogan out loud",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "say": {
    id: "say",
    entryInstrux: "Call the method that will cause your trainer to say whatever the user inputs out loud",
    displayType: 'triggerType',
    type: "method",
    args: 'str',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "work": {
    id: "work",
    entryInstrux: "Call the method that will cause your trainer to work",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "sleep": {
    id: "sleep",
    entryInstrux: "Call the method that will cause your trainer to sleep",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "exercise": {
    id: "exercise",
    entryInstrux: "Call the method that will cause your trainer to exercise",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "watchTelevision": {
    id: "watchTelevision",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "readBook": {
    id: "readBook",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "takeCompliment": {
    id: "takeCompliment",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "takeInsult": {
    id: "takeInsult",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'triggerType',
    type: "method",
    args: '',
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
    refresh: 'current-state',
    mode: 'debug'
  },
  "getFirstPokemon": {
    id: "getFirstPokemon",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getLastPokemon": {
    id: "getLastPokemon",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getPokemonNumber100": {
    id: "getPokemonNumber100",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "getPokemonByIndex": {
    id: "getPokemonByIndex",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "printAllPokemon": {
    id: "printAllPokemon",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "printAllPokemonInReverse": {
    id: "printAllPokemonInReverse",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findPokemonByName": {
    id: "findPokemonByName",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findPokemonWithHighestAttack": {
    id: "findPokemonWithHighestAttack",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findPokemonWithHighestDefense": {
    id: "findPokemonWithHighestDefense",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findPokemonWithLowestSpeed": {
    id: "findPokemonWithLowestSpeed",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findPokemonWithLowestHP": {
    id: "findPokemonWithLowestHP",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findAllPokemonWithHPGreaterThan": {
    id: "findAllPokemonWithHPGreaterThan",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findAllPokemonWithAttackGreaterThan": {
    id: "findAllPokemonWithAttackGreaterThan",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findAllPokemonWithAttackLessThan": {
    id: "findAllPokemonWithAttackLessThan",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findAllPokemonWithName": {
    id: "findAllPokemonWithName",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findAllPokemonWithoutName": {
    id: "findAllPokemonWithoutName",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  },
  "findAllPokemonStartingWithLetter": {
    id: "findAllPokemonStartingWithLetter",
    entryInstrux: "Call the function...",
    displayType: 'tableType',
    type: "function",
    args: '',
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    mode: 'debug'
  }
}