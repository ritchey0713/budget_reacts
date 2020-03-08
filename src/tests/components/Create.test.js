import React from "react"
import { shallow } from "enzyme"
import { CreateExpense } from "../../components/Create.js"
import expenses from "../fixtures/expenses"

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<CreateExpense startAddExpense={onSubmit} history={history}/>)
})

test("should render create expense page", () => {

  expect(wrapper).toMatchSnapshot()
})

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("reduxOnSubmit")(expenses[0])

  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0])
})