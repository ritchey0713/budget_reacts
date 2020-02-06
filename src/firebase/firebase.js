import * as firebase from "firebase"
// import firebaseConfig from "./firebaseSecrets"


console.log(process.env)

firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
});


// local init
// firebase.initializeApp(firebaseConfig);  

const dataBase = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 

googleAuthProvider.setCustomParameters({
  "prompt": "select_account"
})

export { firebase, googleAuthProvider, dataBase as default };