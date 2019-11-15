import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
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

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>DESC: {description}  </Link>
    </h3>

    <p>
      Amount: {amount}  
    </p>

    <p>
      Created at: {createdAt}  
    </p>

  </div>
)

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired
}



export default ExpenseListItem