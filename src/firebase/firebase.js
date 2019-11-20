import * as firebase from "firebase"
import firebaseConfig from "./firebaseSecrets"



firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database()

dataBase.ref('expenses').on("child_removed", (snapShot) => {
  console.log(snapShot.key, snapShot.val())
})

dataBase.ref("expenses").on("child_changed", (snapShot) => {
  console.log(snapShot.key, snapShot.val())
})

dataBase.ref("expenses").on("child_added", (snapShot) => {
  console.log(snapShot.key, snapShot.val())
})

// dataBase.ref("expenses").push(
//   {
//     description: "buy coffee",
//     note: "",
//     amount: 10000,
//     createdAt: 12432213
//   })


// dataBase.ref("expenses").push(
//   {
//     description: "phone bill",
//     note: "",
//     amount: 70000,
//     createdAt: 32432213
//   })

// dataBase.ref("expenses")
//   .once("value")
//   .then((snapShot) => {
//     const expenses = []
//     snapShot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
//       })
//     })
//     console.log(expenses)
//   }).catch((err) => {
//     console.log(err)
//   })

// dataBase.ref("expenses")
//   .on("value", (snapShot) => {
//     const expenses = []
//     snapShot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
//       })
//     })
//     console.log(expenses)
//   })

  // dataBase.ref("expenses").push(
  // {
  //   description: "water bill",
  //   note: "",
  //   amount: 70000,
  //   createdAt: 32432213
  // })

  

// dataBase.ref("notes/-Lu8wBSpI1ml_VMhhzBx").remove()

// dataBase.ref("notes").push({
//     body: 'another note',
//     title: "a new note"    
// })

// const firebaseNotes = {
//   notes: {
//     randomId: {
//       body: 'Test note',
//       title: "first note"    
//     },
//     randomId2: {
//       body: 'Test note',
//       title: "first note"    
//     }
//   }
// }

// const notes = [{
//   id: 12,
//   body: 'Test note',
//   title: "first note"
// }, {
//   id: 112,
//   body: 'another note',
//   title: "a new note"
// }]

// dataBase.ref("notes").set(notes)

// dataBase.ref("notes/12")

// const onValueChange = dataBase.ref()
//   .on("value", (snapShot) => {
//     console.log(snapShot.val())
//   }, (error) => {
//     console.log("ERROR", error)
//   })

//   dataBase.ref().off(onValueChange)

// dataBase.ref()
//   .once("value")
//     .then((snapshot) => {
//       const data = snapshot.val()
//       console.log(data)
//     }).catch((e) => {
//       console.log(e, "error")
//     })

// dataBase.ref().set({
//   name: "Dj Ritchey",
//   age: 29,
//   stressLevel: 6, 
//   isSingle: true,
//   job: {
//     title: "Dev",
//     company: "Google"
//   },
//   location: {
//     city: "Columbus",
//     country: "United States"
//   }
// }).then(() => {
//   console.log("SAVED")
// }).catch((error) => {
//   console.log(error, "error")
// })

// dataBase.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// })

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

// const onValueChange = dataBase.ref().on("value", (snapShot) => {
//   const data = snapShot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// dataBase.ref().update({
//   name: "Jim",
//   "job/title": "Project Manager",
//   "job/company": "Facebook"
// })