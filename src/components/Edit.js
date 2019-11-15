import React from 'react'
import ExpenseForm from "./ExpenseForm"
import { connect } from 'react-redux'
import { editExpense } from '../actions/expenses'

const EditExpense = (props) => {
  return (
    <div>
      Editing expense with an id of {props.match.params.id}
      <ExpenseForm 
        expense={props.expense}
        reduxOnSubmit={(expense) => {
          props.dispatch(editExpense(props.match.params.id, expense))
          props.history.push("/")
        }
          
        }
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === ownProps.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpense)