import React from "react"
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import Header from "../components/Header.js"
import DashBoard from "../components/DashBoard"
import Create from "../components/Create"
import Edit from "../components/Edit"
import Help from "../components/Help"
import NotFound from "../components/NotFound"
import Login from "../components/LoginPage"

export const history = createHistory()

const appRouter = () => {
  return (
    <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Login} exact={true}/>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/create" component={Create}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/help" component={Help}/>
        <Route  component={NotFound}/>
      </Switch>
    </div>  
  </Router>
  )
}


export default appRouter
