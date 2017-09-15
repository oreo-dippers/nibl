// import React, { Component } from 'react';
// import store from '../store';
import { connect } from 'react-redux';
import Main from '../components/routes/main'

const mapStateToProps = function mapStateToProps(store) {
  console.log('store', store)
  return {
    restaurants: store.restaurantsState.restaurants,
    dishes: store.restaurantsState.dishes,
    routing: store.routing
  }
}

const MainContainer = connect(mapStateToProps)(Main)

export default MainContainer
