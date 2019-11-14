import React from "react" 
import ExpenseForm from "./ExpenseForm"

const create = () => {
  return (
    <div>
      <h1>Add new budget</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense)
        }}
      />
    </div>
  )
}

export default create