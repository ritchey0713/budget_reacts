import * as firebase from 'firebase'
import firebaseConfig from "./firebaseSecrets"



firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database()

dataBase.ref().set({
  name: "Dj Ritchey",
  age: 29,
  isSingle: true,
  location: {
    country: "United States"
  }
})

// dataBase.ref().set("this is more data")

dataBase.ref("age").set(30)
dataBase.ref('location/city').set("columbus")
dataBase.ref("attributes").set({
  height: 69,
  weight: 170
})