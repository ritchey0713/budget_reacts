import React from "react"
import moment from "moment"
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import "react-dates/lib/css/_datepicker.css"

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calanderFocused: false,
      error: ""
    }
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => (
      { description }
    ))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => (
      { note }
    ))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => (
        { amount }
      ))
    }
  }

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => (
        { createdAt }
      ))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => (
      { calanderFocused: focused }
    ))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.description || !this.state.amount){
      this.setState(() => {
        return {
          error: "please fill all the form fields out"
        }
      })
      // set error state
    } else {
      this.setState(() => {
        return {
          error: ""
        }
      })
      console.log("saved!")
      this.props.reduxOnSubmit({ 
        description: this.state.description, 
        createdAt: this.state.createdAt.valueOf(), 
        amount: parseFloat(this.state.amount, 10) * 100, 
        note: this.state.note
      })
    }
  }

  render(){
    return (
      <div>
        <div>{this.state.error && <p>{this.state.error}</p>}</div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={ this.onDescriptionChange }
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => {false}}
          />
          <textarea
            placeholder="Add a note to budget"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}