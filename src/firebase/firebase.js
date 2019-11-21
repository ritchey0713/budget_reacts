import * as firebase from "firebase"
import firebaseConfig from "./firebaseSecrets"



firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database()


export { firebase, dataBase as default };