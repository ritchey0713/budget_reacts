import React from 'react'
import ExpenseForm from "./ExpenseForm"
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpense = (props) => {
  return (
    <div>
      Editing expense with an id of {props.match.params.id}
      <ExpenseForm 
        expense={props.expense}
        reduxOnSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense))
          props.history.push("/")
        }
          
        }
      />
      <button onClick={(e) => {
        props.dispatch(startRemoveExpense(props.expense))
        props.history.push("/")
      }}>
      remove
    </button>
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