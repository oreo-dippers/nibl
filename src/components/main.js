import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import RoutesForRestaurants from './routesForRestaurants'
import Dishes from './dishes'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /restaurants
// and /dishes routes will match any pathname that starts
// with /restaurants or /dishes. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={() => <Home test={props.test}/>}/>
      <Route path='/restaurants' component={RoutesForRestaurants}/>
      <Route path='/dishes' component={Dishes}/>
    </Switch>
  </main>
)

export default Main
