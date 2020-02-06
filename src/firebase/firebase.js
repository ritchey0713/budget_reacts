import * as firebase from "firebase"
import firebaseConfig from "./firebaseSecrets"



// firebase.initializeApp({
//     apiKey: ENV['APIKEY'],
//   authDomain: ENV['AUTHDOMAIN'],
//   databaseURL: ENV['DATABASEURL'],
//   projectId: ENV["PROJECTID"],
//   storageBucket: ENV['STORAGEBUCKET'],
//   messagingSenderId: ENV['MESSAGINGSENDERID'],
//   appId: ENV['APPID'],
//   measurementId: ENV['MEASUREMENTID']
// });


// local init
firebase.initializeApp(firebaseConfig);  

const dataBase = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 

googleAuthProvider.setCustomParameters({
  "prompt": "select_account"
})

export { firebase, googleAuthProvider, dataBase as default };