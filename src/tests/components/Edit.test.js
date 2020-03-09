import React from "react"
import { shallow } from "enzyme"
import { EditExpense } from "../../components/Edit.js"
import expenses from "../fixtures/expenses"

let onSubmit, history, wrapper, onDelete;

beforeEach(() => {
  onSubmit = jest.fn()
  onDelete = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpense expense={expenses[0]} startEditExpense={onSubmit} startRemoveExpense={onDelete} history={history}/>)
})

test("Should render edit page", () => {
  expect(wrapper).toMatchSnapshot()
})

test("should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("reduxOnSubmit")(expenses[0])
  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test("should handle onDelete event", () => {
  wrapper.find("button").simulate("click")
  expect(history.push).toHaveBeenLastCalledWith("/")
  expect(onDelete).toHaveBeenLastCalledWith(expenses[0])
})