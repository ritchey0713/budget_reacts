import React from "react"
import { shallow } from "enzyme"
import { CreateExpense } from "../../components/Create.js"
import expenses from "../fixtures/expenses"

test("should render create expense page", () => {
  const onSubmit = jest.fn()
  const history = {push: jest.fn()}
  const wrapper = shallow(<CreateExpense startAddExpense={onSubmit} history={history}/>)
  expect(wrapper).toMatchSnapshot()
})

test("should handle onSubmit", () => {
  const onSubmit = jest.fn()
  const history = {push: jest.fn()}
  const wrapper = shallow(<CreateExpense startAddExpense={onSubmit} history={history}/>)
  wrapper.find("ExpenseForm").prop("reduxOnSubmit")(expenses[0])

  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0])
})