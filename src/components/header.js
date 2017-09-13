import React, { Component } from 'react'
import Nav from './nav'
class Header extends Component {
  render(){
    console.log('this.props', this.props)
    const { restaurantQuery, submitrestaurantQuery } = this.props
    return (
      <div>
        <Nav restaurantQuery={restaurantQuery} submitrestaurantQuery={submitrestaurantQuery}/>
      </div>
    );
  }
};

export default Header
