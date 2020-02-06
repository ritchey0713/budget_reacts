import * as firebase from "firebase"
// import FirebaseConfig from "./firebaseSecrets"



firebase.initializeApp({
    apiKey: ENV['APIKEY'],
  authDomain: ENV['AUTHDOMAIN'],
  databaseURL: ENV['DATABASEURL'],
  projectId: ENV["PROJECTID"],
  storageBucket: ENV['STORAGEBUCKET'],
  messagingSenderId: ENV['MESSAGINGSENDERID'],
  appId: ENV['APPID'],
  measurementId: ENV['MEASUREMENTID']
});


// firebase.initializeApp(firebaseConfig);  local init

const dataBase = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 

googleAuthProvider.setCustomParameters({
  "prompt": "select_account"
})

export { firebase, googleAuthProvider, dataBase as default };