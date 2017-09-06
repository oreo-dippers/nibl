import React, { Component } from 'react'
import Header from './header';
import Main from './main';
import Footer from './footer';
import RestaurantsAPI from '../restaurants_api'
import { Switch, Route } from 'react-router-dom'
import Home from './home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    var restaurants = RestaurantsAPI.restaurants
    this.setState({restaurants});
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div>
        <Header />
        <Main restaurants={restaurants}/>
        <Footer />
      </div>
    )
  }
}


export default App
