import * as firebase from "firebase"
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
}).then(() => {
  console.log("SAVED")
}).catch((error) => {
  console.log(error, "error")
})

dataBase.ref().update({
  name: "Tom",
  age: 55,
  job: "Dev",
  isSingle: null
})

// dataBase.ref().set("this is more data")

// dataBase.ref("age").set(30)
// dataBase.ref('location/city').set("columbus")
// dataBase.ref("attributes").set({
//   height: 69,
//   weight: 170
// }).then(() => {
//   console.log("NEW SAVE")
// }).catch((error) => {
//   console.log("ERROR", error)
// })

// const user = dataBase.ref("isSingle")
// user.remove()
//   .then(() => {
//     console.log("removed")
//   })