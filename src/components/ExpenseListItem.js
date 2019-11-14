import React from "react"
import PropTypes from "prop-types"
import { removeExpense } from "../actions/expenses"
import { connect } from 'react-redux'
// const ExpenseListItem = (props) => (
//   <div>
//     <h3>
//       DESC: {props.expense.description}  
//     </h3>

//     <p>
//       Created at: {props.expense.createdAt}  
//     </p>
//   </div>
// )

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>
      DESC: {description}  
    </h3>

    <p>
      Amount: {amount}  
    </p>

    <p>
      Created at: {createdAt}  
    </p>

    <button onClick={(e) => {
      dispatch(removeExpense({ id }))
      }}>
      remove
    </button>
  </div>
)

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired
}



export default connect()(ExpenseListItem)