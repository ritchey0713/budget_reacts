import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"

export const ExpensesSummary = (props) => {
  const expenseWord = props.expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(props.expensesTotal / 100).format("$0,0.00");
  console.log(formattedExpensesTotal)
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h1>
        <div className="page-header__actions">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount : visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)