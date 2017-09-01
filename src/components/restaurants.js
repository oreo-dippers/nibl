import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Swtich, Route } from 'react-router-dom';
import RestaurantList from './restaurantsList';
import Restaurant from './restaurant';

class Restaurants extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/restaurants' component={RestaurantsList} />
        <Route path='/restaurants/:name' component={Restaurant} />
      </Switch>
    )
  }
}

export default Restaurants;
