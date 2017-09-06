import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// The Restaurant looks up the restaurant using the number parsed from
// the URL's pathname. If no restaurant is found with the given
// name, then a "Restaurant not found" message is displayed.
class Restaurant extends Component {
  render() {
    console.log('this', this)
    console.log('this.props.location.state', this.props.location.state);

      const restaurant = this.props.location.state.restaurant
      console.log('restaurant', restaurant);
      if (!restaurant) {
        return <div>Sorry, but the restaurant was not found</div>
      }
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <h2>Store ID: {restaurant.store_id}</h2>
        <h2>Location: {restaurant.location}</h2>
        <Link to='/restaurants'>Back</Link>
      </div>
    )
  }
}

export default Restaurant
