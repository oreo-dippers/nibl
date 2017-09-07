import React, { Component } from 'react'
import Header from './header';
import Main from './main';
import Footer from './footer';
import RestaurantsAPI from '../restaurants_api'
import { Switch, Route } from 'react-router-dom'
import VenuesByQueryAPI from '../../json-data/venues-by-query'
import Home from './home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    }
    console.log('VenuesByQueryAPI', VenuesByQueryAPI)
  }

  componentDidMount() {
    var restaurants = VenuesByQueryAPI.response.groups[0].items
    console.log('restaurants', restaurants);
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
