import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DishesList from '../views/dishes/dishesList'
import Dish from '../views/dishes/dish'

const RoutesForDishes = (props) => (
  <Switch>
    {console.log('props', props)}
    <Route exact path='/dishes' component={() => <DishesList {...props} />}/>
    <Route path='/dishes/:name' component={Dish}/>
  </Switch>
)

export default RoutesForDishes
