import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RestaurantsList from '../views/restaurants/restaurantsList'
import Restaurant from '../views/restaurants/restaurant'

const RoutesForRestaurants = (props) => (
  <Switch>
    <Route exact path='/restaurants' component={() => <RestaurantsList {...props} />}/>
    <Route path='/restaurants/:name' component={Restaurant}/>
  </Switch>
)

export default RoutesForRestaurants
