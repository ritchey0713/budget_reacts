import React from "react"
import { NavLink } from 'react-router-dom'
import { startLogout } from "../actions/auth"
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <header>
      <h1>budget Reacts!</h1>
      <span>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> | 
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink> | 
        <NavLink to="/create" activeClassName="is-active">new</NavLink> | 
        <NavLink to="/help" activeClassName="is-active">Help</NavLink> | 
        <button
          onClick={props.startLogout}
        >Log out</button>
      </span>
    </header>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(Header)