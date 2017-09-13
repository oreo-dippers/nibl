import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import RoutesForRestaurants from './routesForRestaurants'
import CommentCard from './CommentCard'
const Main = ({restaurants}) => (
  <main>
    <Switch>
      <Route exact path='/' component={() => <Home />}/>
      <Route path='/restaurants' component={() => <RoutesForRestaurants restaurants={restaurants} />}/>
      <Route path='/food' component={CommentCard}/>
      <Route path='/reviews' component={CommentCard}/>
    </Switch>
  </main>
)

export default Main
