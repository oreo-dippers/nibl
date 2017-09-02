import React from 'react'
import { Switch, Route } from 'react-router-dom'

import RestaurantsList from './restaurantsList'

import Restaurant from './restaurant'

// The RoutesForRestaurants component matches one of two different routes
// depending on the full pathname
const RoutesForRestaurants = () => (
  <Switch>
    <Route exact path='/restaurants' component={RestaurantsList}/>
    <Route path='/restaurants/:name' component={Restaurant}/>
  </Switch>
)


export default RoutesForRestaurants
