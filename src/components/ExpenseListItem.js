import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3>{description}</h3>
        <span>{moment(createdAt).format("MMM Do, YYYY")}</span>
      </div>
      <h3>
        {numeral(amount/100).format('$0.00')}  
      </h3>

    </Link>
)

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired
}



export default ExpenseListItem