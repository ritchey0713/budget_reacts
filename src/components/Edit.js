import React from 'react'
import ExpenseForm from "./ExpenseForm"
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpense = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Editing: {props.expense.description}</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm 
          expense={props.expense}
          reduxOnSubmit={(expense) => {
            props.dispatch(startEditExpense(props.expense.id, expense))
            props.history.push("/")
            }
          }
        />
        <button 
          className="button button--secondary"
          onClick={(e) => {
          props.dispatch(startRemoveExpense(props.expense))
          props.history.push("/")
          }}>
          Remove
        </button>
      </div>

      
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