import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import "normalize.css/normalize.css";
import "./styles/styles.scss"

const dashBoard = () => {
  return (
    <div>
      this is the dashboard
    </div>
  )
}

const app = document.getElementById("app")
const routes = (
  <BrowserRouter>
    <Route path="/" component={dashBoard}/>
  </BrowserRouter>
)


ReactDOM.render(routes, app)