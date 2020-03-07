import moment from 'moment'

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters"

test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0))

  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  })
})

test("Should generate set end date action object", () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  })
})

test("Should generate set text action object with provided text", () => {
  const text = "Hello world!"
  const action = setTextFilter(text)

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  })
})

test("Should generate set text action object with default arg", () => {
  const action = setTextFilter()

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  })
})

test("Should generate sort by amount action object with provided text", () => {
  const action = sortByAmount()

  expect(action).toEqual({
    type: "SET_SORT_BY_AMOUNT",
    text: "amount"
  })
})

test("Should generate sort by date action object with provided text", () => {
  const action = sortByDate()

  expect(action).toEqual({
    type: "SET_SORT_BY_DATE",
    text: "date"
  })
})