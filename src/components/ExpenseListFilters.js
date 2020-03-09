import React from 'react'
import { connect } from "react-redux"
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters"
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
  state = {
    calanderFocused: null,

  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calanderFocused) => {
    this.setState(() => {
      return {
        calanderFocused: calanderFocused
      }
    })
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
    }

  onSortChange = (e) => {
    e.target.value === "amount" ? this.props.sortByAmount() : this.props.sortByDate()
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
                onChange={this.onTextChange}
              />
            </div>  
            <div className="input-group__item">
              <select 
                className="select"
                value={this.props.filters.sortBy} 
                onChange={this.onSortChange}
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



const mapStateToProps = (state, ownProps) => ({
    filters: state.filters
  })


export default connect(mapStateToProps, {
  setTextFilter, 
  sortByDate, 
  sortByAmount, 
  setStartDate, 
  setEndDate
})(ExpenseListFilters)