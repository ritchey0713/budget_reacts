import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import AppRouter from './routers/AppRouter'
import configureStore from "./store/configureStore"
import { addExpense, removeExpense, editExpense } from "./actions/expenses"
import {  setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"

import "normalize.css/normalize.css";
import "./styles/styles.scss"


const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount:-100 }))
store.dispatch(addExpense({ description: "daycare", amount:299999, createdAt: 10000 }))
store.dispatch(addExpense({ description: "rent", amount:20000000, createdAt: -10000 }))

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters))




const app = document.getElementById("app")

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, app)