import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DishesList from '../views/dishes/dishesList'
import Dishes from '../views/dishes/dishes'

const RoutesForRestaurants = (props) => (
  <Switch>
    <Route exact path='/dishes' component={() => <DishesList {...props} />}/>
    <Route path='/dishes/:name' component={Dishes}/>
  </Switch>
)

export default RoutesForRestaurants
