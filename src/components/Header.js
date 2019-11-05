import React from "react"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>budget Reacts!</h1>
      <span>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> | 
        <NavLink to="/create" activeClassName="is-active">new</NavLink> | 
        <NavLink to="/edit" activeClassName="is-active">edit</NavLink> | 
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </span>
    </header>
  )
}

export default Header