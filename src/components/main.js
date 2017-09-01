import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Dishes from './dishes';
import Restaurants from './restaurants';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dishes' component={Dishes} />
        <Route path='/restaurants' component={Restaurants} />
      </Switch>
    )
  }
}

export default Main;
