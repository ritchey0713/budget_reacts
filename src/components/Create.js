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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add new budget</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            reduxOnSubmit={this.reduxOnSubmit}
          />
        </div>
      </div>
    )
  } 
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     startAddExpense: (expense) => dispatch(startAddExpense(expense))
//   }
// }

const mapDispatchToProps = {startAddExpense}



export default connect(undefined, mapDispatchToProps)(CreateExpense)