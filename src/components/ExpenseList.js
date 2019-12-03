import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"
const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      {props.expenses.length === 0 ? (<p>No expenses!</p>) : (
        props.expenses.map((expense) => {
        return (
          <ExpenseListItem
            {...expense}
            key={expense.id || "test-key"}
          />
         
        ) 
      }))}
      
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(ExpenseList)
