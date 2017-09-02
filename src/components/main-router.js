import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import App from './app';
import Dishes from './dishes';
import RestaurantsRouter from './restaurants-router';

class MainRouter extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={() => <App />} />
          <Route path='/dishes' component={() => <Dishes />} />
          <Route path='/restaurants' component={() => <Restaurants />} />
        </Switch>
      </main>

    )
  }
}

export default MainRouter;
