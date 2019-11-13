import React from "react"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import { connect } from 'react-redux'

const dashBoard = () => {
  return (
    <div>
      this is the dashboard
      <ExpenseListFilters/>
      <ExpenseList />
    </div>
  )
}



export default dashBoard