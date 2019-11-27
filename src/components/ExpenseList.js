import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"
import ExpenseSummary from "./ExpenseSummary"
const ExpenseList = (props) => {
  return (
    <div>
      <ExpenseSummary />
      {props.expenses.map((expense) => {
        return (
          <ExpenseListItem
            {...expense}
            key={expense.id || "test-key"}
          />
         
        ) 
      })}
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
