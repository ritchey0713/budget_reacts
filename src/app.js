import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import AppRouter from './routers/AppRouter'
import configureStore from "./store/configureStore"
import { startSetExpenses } from "./actions/expenses"
import {  setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import { firebase } from "./firebase/firebase"

import "normalize.css/normalize.css";
import "./styles/styles.scss"


const store = configureStore();

// store.dispatch(addExpense({ description: "water bill", amount:-100 }))
// store.dispatch(addExpense({ description: "daycare", amount:299999, createdAt: 10000 }))
// store.dispatch(addExpense({ description: "rent", amount:20000000, createdAt: -10000 }))

const app = document.getElementById("app")

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>loading...</p>, app)

store.dispatch(startSetExpenses())
  .then(()=> {
    ReactDOM.render(jsx, app)
  })

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log("logged in")
  }
  else {
    console.log("logged out")
  }
})