import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"
import moment from "moment"

test("should render form correctly", () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test("should render form with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>)

  expect(wrapper).toMatchSnapshot()
})

test("should render error for invalid submission ", () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test("should set description on input change", () => {
  const value = "Some desc"
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test("should set note on input change", () => {
  const value = "Some desc"
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test("should set amount with valid value", () => {
  const value = "100000"
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('input').at(1).simulate("change", {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test("should not set amount with bad value", () => {
  const value = "12.0945"
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('input').at(1).simulate("change", {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe("")
})

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn()
  // onSubmitSpy("john", "philly")
  // expect(onSubmitSpy).toHaveBeenCalledWith("john", "philly")
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} reduxOnSubmit={onSubmitSpy}/>)
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  })
  expect(wrapper.state("error")).toBe("")
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test("should set new date on date change", () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now)
  expect(wrapper.state("createdAt")).toEqual(now)
})

test("should set focus to calendar", () => {
  const focused = { focused: true }
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")(focused)
  expect(wrapper.state("calanderFocused")).toBe(true)
})