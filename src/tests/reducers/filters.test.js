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
  
})