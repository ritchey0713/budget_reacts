const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
}



const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      }

    case "SET_SORT_BY_AMOUNT":
        return {
          ...state,
          sortBy: action.text
        }  

    case "SET_SORT_BY_DATE":
        return {
          ...state,
          sortBy: action.text
        }  
    
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      }

    case "SET_END_DATE":
        return {
          ...state,
          endDate: action.date
        }

    default: 
      return state
  }
}

export default filtersReducer