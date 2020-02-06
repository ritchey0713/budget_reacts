import React from 'react'
import { connect } from "react-redux"
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters"
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
  state = {
    calanderFocused: null,

  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calanderFocused) => {
    this.setState(() => {
      return {
        calanderFocused: calanderFocused
      }
    })
  }

  render(){
    return (
      (
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input 
                type="text" 
                className="text-input"
                value={this.props.filters.text} 
                onChange={(e) => {
                  this.props.dispatch(setTextFilter(e.target.value))
                  }
                }
              />
            </div>  
            <div className="input-group__item">
              <select 
                className="select"
                value={this.props.filters.sortBy} 
                onChange={(e) => {
                  e.target.value === "amount" ? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate())
                  }
                }
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>  
            <div className="input-group__item">
              <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId={Math.random().toString()}
                endDate={this.props.filters.endDate}
                endDateId={Math.random().toString()}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calanderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
              />
            </div>  
          </div>
        </div>
      )
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)