import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"

const Login = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Budget reacts</h1>
        <p>Budget your expenses!</p>
        <button
          onClick={startLogin}
          className="login-button"
        >
          Login with Google!
        </button>
      </div>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapDispatchToProps)(Login)