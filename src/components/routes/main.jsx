import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/static/home'
import RoutesForRestaurants from './routesForRestaurants'
import RoutesForDishes from './routesForDishes'
import CommentCard from '../views/static/commentCard'
import Fridge from '../views/dishes/fridge'
import Nav from '../views/nav'


const Main = (props) => (
  <div>
    <Nav {...props} />
    <Switch>
      <Route exact path='/' component={() => <Home />}/>
      <Route
        path='/restaurants'
        component={() =>
          <RoutesForRestaurants restaurants={props.restaurants}
          />}
        />
      <Route
        path='/dishes'
        component={() =>
          <RoutesForDishes dishes={props.dishes}
          />}
        />
      <Route path='/fridge' component={Fridge}/>
    </Switch>
  </div>
)

export default Main
