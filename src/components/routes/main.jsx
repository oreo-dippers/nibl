import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/static/home'
import RoutesForRestaurants from './routesForRestaurants'
// import RoutesForRestaurants from './routesForDishes'
import CommentCard from '../views/static/commentCard'
import Nav from '../views/nav'


const Main = (props) => (
  <div>
    {console.log('props', props)}
    <Nav {...props} />
    <Switch>
      <Route exact path='/' component={() => <Home />}/>
      <Route path='/restaurants' component={() => <RoutesForRestaurants restaurants={props.restaurants} />}/>
      {/* <Route path='/dishes' component={RoutesForDishes}/> */}
      <Route path='/addphoto' component={CommentCard}/>
    </Switch>
  </div>
)

export default Main
