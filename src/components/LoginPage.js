import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"

const Login = ({ startLogin }) => {
  return (
    <div>
      Login page
      <button
        onClick={startLogin}
      >
        Login here!
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapDispatchToProps)(Login)