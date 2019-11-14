import React from "react" 
import ExpenseForm from "./ExpenseForm"
import { connect } from 'react-redux'
import { addExpense } from "../actions/expenses"

const CreateExpense = (props) => {
  return (
    <div>
      <h1>Add new budget</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense)
          props.dispatch(addExpense(expense))
        }}
      />
    </div>
  )
}

export default connect()(CreateExpense)