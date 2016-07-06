/*
  This JSON object contains the static data for features used by all students.
*/


// TODO: Individualize these
globalInstrux = {
  "expression-correct": "Correct expression! Click run to continue.",
  "expression-incorrect": "Incorrect! Check your expression carefully, and try again.",
  "execution": 'returned the value below.'
}

features = {
  "getAppName": {
    id: "getAppName",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    codeTag: true,
    placeholderText: "App Name",
    mode: 'debug',
    entryInstrux: "Call the function that will return your app's name",
    type: "function",
    expressionExpected: "getAppName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAppAuthor": {
    id: "getAppAuthor",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    codeTag: true,
    placeholderText: "App Author",
    mode: 'debug',
    entryInstrux: "Call the function that will return your app's author",
    type: "function",
    expressionExpected: "getAppAuthor()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAppVersion": {
    id: "getAppVersion",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    codeTag: true,
    placeholderText: "App Version",
    mode: 'debug',
    entryInstrux: "Call the function that will return your app's version #",
    type: "function",
    expressionExpected: "getAppVersion()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAppCredits": {
    id: "getAppCredits",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    codeTag: true,
    placeholderText: "App Credits",
    mode: 'debug',
    entryInstrux: "Call the function that will return your app's credits",
    type: "function",
    expressionExpected: "getAppCredits()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAppYear": {
    id: "getAppYear",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    codeTag: true,
    mode: 'debug',
    placeholderText: "App Year",
    entryInstrux: "Call the function that will return the year you created the app",
    type: "function",
    expressionExpected: "getAppYear()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "createTrainer": {
    id: "createTrainer",
    entryInstrux: "Call the function that will return your trainer's last name",
    displayType: 'tableType',
    codeTag: true,
    mode: 'debug',
    placeholderText: "Pokemon Trainer",
    entryInstrux: "Create a new Trainer and save it to a variable",
    type: "function",
    expressionExpected: "constructor",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
    trainerVar: false
  },
  "firstName": {
    id: "firstName",
    entryInstrux: "Enter the expression that will retrieve your trainer's first name",
    displayType: 'tableType',
    type: "variable",
    codeTag: true,
    mode: 'debug',
    placeholderText: "First Name",
    expressionExpected: "t.firstName",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "lastName": {
    id: "lastName",
    entryInstrux: "Enter the expression that will retrieve your trainer's last name",
    displayType: 'tableType',
    type: "variable",
    codeTag: true,
    mode: 'debug',
    placeholderText: "Last Name",
    expressionExpected: "t.lastName",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "age": {
    id: "age",
    entryInstrux: "Enter the expression that will retrieve your trainer's age",
    displayType: 'tableType',
    type: "variable",
    codeTag: true,
    mode: 'debug',
    placeholderText: "Age",
    expressionExpected: "t.age",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "slogan": {
    id: "slogan",
    entryInstrux: "Enter the expression that will retrieve your trainer's slogan",
    displayType: 'tableType',
    type: "variable",
    expressionExpected: "t.slogan",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "favoriteElement": {
    id: "favoriteElement",
    entryInstrux: "Enter the expression that will retrieve your trainer's favorite element",
    displayType: 'tableType',
    type: "variable",
    codeTag: true,
    mode: 'debug',
    placeholderText: "Favorite Element",
    expressionExpected: "t.favoriteElement",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "favoriteColor": {
    id: "favoriteColor",
    entryInstrux: "Enter the expression that will retrieve your trainer's favorite color",
    displayType: 'tableType',
    type: "variable",
    codeTag: true,
    mode: 'debug',
    placeholderText: "Favorite Color",
    expressionExpected: "t.favoriteColor",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "energy": {
    id: "energy",
    entryInstrux: "Enter the expression that will retrieve your trainer's energy",
    displayType: 'barType',
    type: "variable",
    expressionExpected: "t.energy",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "happiness": {
    id: "happiness",
    entryInstrux: "Enter the expression that will retrieve your trainer's happiness",
    displayType: 'barType',
    type: "variable",
    expressionExpected: "t.happiness",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "confidence": {
    id: "confidence",
    entryInstrux: "Enter the expression that will retrieve your trainer's confidence",
    displayType: 'barType',
    type: "variable",
    expressionExpected: "t.confidence",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "intelligence": {
    id: "intelligence",
    entryInstrux: "Enter the expression that will retrieve your trainer's intelligence",
    displayType: 'barType',
    type: "variable",
    expressionExpected: "t.intelligence",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "strength": {
    id: "strength",
    entryInstrux: "Enter the expression that will retrieve your trainer's strength",
    displayType: 'barType',
    type: "variable",
    expressionExpected: "t.strength",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "coins": {
    id: "coins",
    entryInstrux: "Enter the expression that will retrieve your trainer's coins",
    displayType: 'barType',
    type: "variable",
    expressionExpected: "t.coins",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getFullName": {
    id: "getFullName",
    entryInstrux: "Call the method that will create and return your trainer's 'full name'",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getFullName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getReverseName": {
    id: "getReverseName",
    entryInstrux: "Call the method that will create and return your trainer's 'reverse name'",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getReverseName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getDoubleFullName": {
    id: "getDoubleFullName",
    entryInstrux: "Call the method that will create and return your trainer's 'double full name'",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getDoubleFullName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getDoubleReverseName": {
    id: "getDoubleReverseName",
    entryInstrux: "Call the method that will create and return your trainer's 'double full name'",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getDoubleReverseName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getImageFileName": {
    id: "getImageFileName",
    entryInstrux: "Call the method that will create and return your trainer's image filename",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getImageFileName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getFirstNameLastInitial": {
    id: "getFirstNameLastInitial",
    entryInstrux: "Call the method that will create and return your trainer's first name followed by their last initial",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getFirstNameLastInitial()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getFirstInitialLastName": {
    id: "getFirstInitialLastName",
    entryInstrux: "Call the method that will create and return your trainer's first initial followed by their last name",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getFirstInitialLastName()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAgeInMonths": {
    id: "getAgeInMonths",
    entryInstrux: "Call the method that will calculate and return your trainer's age in months",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getAgeInMonths()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAgeInWeeks": {
    id: "getAgeInWeeks",
    entryInstrux: "Call the method that will calculate and return your trainer's age in weeks",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getAgeInWeeks()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAgeInDays": {
    id: "getAgeInDays",
    entryInstrux: "Call the method that will calculate and return your trainer's age in days",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getAgeInDays()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAgeInHours": {
    id: "getAgeInHours",
    entryInstrux: "Call the method that will calculate and return your trainer's age in hourss",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getAgeInHours()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAgeInMinutes": {
    id: "getAgeInMinutes",
    entryInstrux: "Call the method that will calculate and return your trainer's age in minutes",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getAgeInMinutes()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "getAgeInSeconds": {
    id: "getAgeInSeconds",
    entryInstrux: "Call the method that will calculate and return your trainer's age in seconds",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.getAgeInSeconds()",
    expressionEntered: '',
    hasReturnValue: true,
    status: "expression-empty",
    complete: false,
  },
  "writeHi": {
    id: "writeHi",
    entryInstrux: "Call the method that will cause your trainer to write 'hi'",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.writeHi()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "writeSlogan": {
    id: "writeSlogan",
    entryInstrux: "Call the method that will cause your trainer to write their slogan",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.writeSlogan()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "write": {
    id: "write",
    entryInstrux: "Call the method that will cause your trainer to write whatever the user inputs",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.write()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "sayHi": {
    id: "sayHi",
    entryInstrux: "Call the method that will cause your trainer to say 'hi' out loud",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.sayHi()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "saySlogan": {
    id: "saySlogan",
    entryInstrux: "Call the method that will cause your trainer to say their slogan out loud",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.saySlogan()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "say": {
    id: "say",
    entryInstrux: "Call the method that will cause your trainer to say whatever the user inputs out loud",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.say()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "work": {
    id: "work",
    entryInstrux: "Call the method that will cause your trainer to work",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.work()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "rest": {
    id: "rest",
    entryInstrux: "Call the method that will cause your trainer to rest",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.rest()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "exercise": {
    id: "exercise",
    entryInstrux: "Call the method that will cause your trainer to exercise",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.exercise()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "watchTelevision": {
    id: "watchTelevision",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.watchTelevision()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "readBook": {
    id: "readBook",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.readBook()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "takeCompliment": {
    id: "takeCompliment",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.takeCompliment()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  },
  "takeInsult": {
    id: "takeInsult",
    entryInstrux: "--- TO BE COMPLETED ---",
    displayType: 'tableType',
    type: "method",
    expressionExpected: "t.takeInsult()",
    expressionEntered: '',
    hasReturnValue: false,
    status: "expression-empty",
    complete: false,
  }
}