import React from "react"
import { Link } from 'react-router-dom'
import { startLogout } from "../actions/auth"
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Budget Reacts!</h1>
          </Link> 
          <button
            className="button button--link"
            onClick={props.startLogout}
          >Log out</button>
        </div>
      </div>
    </header>
  )
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     startLogout: () => dispatch(startLogout())
//   }
// }

const mapDispatchToProps = {
  startLogout
}

export default connect(undefined, mapDispatchToProps)(Header)