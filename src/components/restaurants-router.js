import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Swtich, Route } from 'react-router-dom';
import RestaurantList from './restaurants-list';
import Restaurant from './restaurant';

class RestaurantsRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/restaurants' component={RestaurantsList} />
        <Route path='/restaurants/:name' component={Restaurant} />
      </Switch>
    )
  }
}

export default RestaurantsRouter;
