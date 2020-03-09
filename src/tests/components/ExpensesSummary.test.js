import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpenseSummary"

test("should render summary with one expense", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={500} />)
  expect(wrapper).toMatchSnapshot()
})

test("should render summary with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={15} expensesTotal={5002323232}  />)
  expect(wrapper).toMatchSnapshot()
})