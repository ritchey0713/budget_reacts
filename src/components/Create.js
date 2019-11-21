import React from "react" 
import ExpenseForm from "./ExpenseForm"
import { connect } from 'react-redux'
import { addExpense, startAddExpense } from "../actions/expenses"

export class CreateExpense extends React.Component {
  reduxOnSubmit = (expense) => {
    this.props.startAddExpense(expense)
    this.props.history.push("/")
  }
  render(){
    return (
      <div>
        <h1>Add new budget</h1>
        <ExpenseForm
          reduxOnSubmit={this.reduxOnSubmit}
        />
      </div>
    )
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(CreateExpense)