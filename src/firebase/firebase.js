import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDcp7U9QwJDT5RJfyhT_9FdBVW5h1PwhoA",
  authDomain: "fir-app-1c9bd.firebaseapp.com",
  databaseURL: "https://fir-app-1c9bd.firebaseio.com",
  projectId: "fir-app-1c9bd",
  storageBucket: "fir-app-1c9bd.appspot.com",
  messagingSenderId: "469509466056",
  appId: "1:469509466056:web:172e7aa4801238a0ba42fd",
  measurementId: "G-33BWNNXRT5"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: "Dj Ritchey"
})