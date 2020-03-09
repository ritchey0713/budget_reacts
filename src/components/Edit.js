import React, { Component } from 'react'
import ExpenseForm from "./ExpenseForm"
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpense extends Component {

  reduxOnSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push("/")
  }
  
  reduxOnDelete = () => {
    this.props.startRemoveExpense(this.props.expense)
    this.props.history.push("/")
  }
  
  render(){
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Editing: {this.props.expense.description}</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm 
          expense={this.props.expense}
          reduxOnSubmit={this.reduxOnSubmit}
        />
        <button 
          className="button button--secondary"
          onClick={this.reduxOnDelete}>
          Remove
        </button>
      </div> 
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === ownProps.match.params.id
    })
  }
}

const mapDispatchToProps = {  startEditExpense,
  startRemoveExpense}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)