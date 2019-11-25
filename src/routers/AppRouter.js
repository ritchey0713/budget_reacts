import React from "react"
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"

import DashBoard from "../components/DashBoard"
import Create from "../components/Create"
import Edit from "../components/Edit"
import Help from "../components/Help"
import NotFound from "../components/NotFound"
import Login from "../components/LoginPage"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
 
export const history = createHistory()

const appRouter = () => {
  return (
    <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashBoard} />
        <PrivateRoute path="/create" component={Create}/>
        <PrivateRoute path="/edit/:id" component={Edit}/>
        <Route path="/help" component={Help}/>
        <Route  component={NotFound}/>
      </Switch>
    </div>  
  </Router>
  )
}


export default appRouter
