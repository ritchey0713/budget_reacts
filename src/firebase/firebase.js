import * as firebase from "firebase"
import firebaseConfig from "./firebaseSecrets"

firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 

export { firebase, googleAuthProvider, dataBase as default };