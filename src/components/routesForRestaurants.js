import React from 'react'
import { Switch, Route } from 'react-router-dom'

import RestaurantsList from './restaurantsList'

// import Restaurant from './restaurant'
import ResturauntCard from './ResturauntCard'

// The RoutesForRestaurants component matches one of two different routes
// depending on the full pathname
const RoutesForRestaurants = ({restaurants}) => (
  <Switch>
    <Route exact path='/restaurants' component={() => <RestaurantsList restaurants={restaurants}/>}/>
    <Route path='/restaurants/:name' component={ResturauntCard }/>
  </Switch>
)


export default RoutesForRestaurants
