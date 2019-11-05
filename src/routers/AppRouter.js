import React from "react"
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import Header from "../components/Header.js"
import DashBoard from "../components/DashBoard"
import Create from "../components/Create"
import Edit from "../components/Edit"
import Help from "../components/Help"
import NotFound from "../components/NotFound"

const appRouter = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={DashBoard} exact={true}/>
        <Route path="/create" component={Create}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/help" component={Help}/>
        <Route  component={NotFound}/>
      </Switch>
    </div>  
  </BrowserRouter>
  )
}


export default appRouter
