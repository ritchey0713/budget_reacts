import filtersReducer from "../../reducers/filters"
import moment from "moment"

test("should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" })

  expect(state).toEqual({
    text: "",
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, {type: "SET_SORT_BY_AMOUNT", text: "amount"})

  expect(state.sortBy).toBe("amount")
})

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  }
  const action = {
    type: "SET_SORT_BY_DATE",
    text: "date"
  }
  const state = filtersReducer(currentState, action)

  expect(state.sortBy).toBe("date")
})

test("should set text filter value", () => {
  const text = "Hello!"
  const action = {type: "SET_TEXT_FILTER", text}
  const state = filtersReducer(undefined, action)

  expect(state.text).toBe(text)
})

test("Should set startDate filter", () => {
  const startDate = moment(0)
  const action = {type: "SET_START_DATE", date: startDate}
  const state = filtersReducer(undefined, action)

  expect(state.startDate).toBe(startDate)
})

test("Should set endDate filter", () => {
  const endDate = moment(1000)
  const action = {type: "SET_END_DATE", date: endDate}
  const state = filtersReducer(undefined, action)

  expect(state.endDate).toBe(endDate)
})