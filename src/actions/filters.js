export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  }
}

export const sortByAmount = (text = "amount") => {
  return {
    type: "SET_SORT_BY_AMOUNT",
    text
  }
}

export const sortByDate = (text = "date") => {
  return {
    type: "SET_SORT_BY_DATE",
    text
  }
}

export const setStartDate = (date) => {
  return {
    type: "SET_START_DATE",
    date
  }
}

export const setEndDate = (date) => {
  return {
    type: "SET_END_DATE",
    date
  }
}