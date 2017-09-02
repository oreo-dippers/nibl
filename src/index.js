import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './components/home'
import Dishes from './components/dishes'
import Restaurants from './components/restaurants'

var Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route path='/dishes' component={() => <Dishes />} />
        <Route path='/restaurants' component={() => <Restaurants />} />
        <Route path='/restaurant/:name' component={() => <Restaurant/>} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))

console.log('hello from app.js!')
