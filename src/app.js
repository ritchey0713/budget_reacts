import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import AppRouter, { history } from './routers/AppRouter'
import configureStore from "./store/configureStore"
import { startSetExpenses } from "./actions/expenses"
import getVisibleExpenses from "./selectors/expenses"
import { login, logout } from "./actions/auth"
import { firebase } from "./firebase/firebase"
import LoadingPage from "./components/LoadingPage.js"


import "normalize.css/normalize.css";
import "./styles/styles.scss"


const store = configureStore();

// store.dispatch(addExpense({ description: "water bill", amount:-100 }))
// store.dispatch(addExpense({ description: "daycare", amount:299999, createdAt: 10000 }))
// store.dispatch(addExpense({ description: "rent", amount:20000000, createdAt: -10000 }))

const app = document.getElementById("app")

let hasRendered = false;

const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, app)
    hasRendered = true
  }
}

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<LoadingPage />, app)

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses())
      .then(()=> {
        renderApp()
    })
    if (history.location.pathname === "/") {
      history.push("/dashboard")
    }
  }
  else {
    store.dispatch(logout())
    renderApp()
    history.push("/")
  }
})