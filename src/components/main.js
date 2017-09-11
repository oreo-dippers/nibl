import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import RoutesForRestaurants from './routesForRestaurants'

const Main = ({restaurants}) => (
  <main>
    <Switch>
      <Route exact path='/' component={() => <Home />}/>
      <Route path='/restaurants' component={() => <RoutesForRestaurants restaurants={restaurants} />}/>
      {/* <Route path='/dishes' component={Dishes}/> */}
    </Switch>
  </main>
)

export default Main
