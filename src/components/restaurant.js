import React, { Component } from 'react'
import RestaurantsAPI from '../restaurants_api'
import { Link } from 'react-router-dom'

// The Restaurant looks up the restaurant using the number parsed from
// the URL's pathname. If no restaurant is found with the given
// name, then a "Restaurant not found" message is displayed.
const Restaurant = (props) => {
  // var num = parseInt(props.match.params.id, 10)
  var name = props.match.params.name

  const restaurant = RestaurantsAPI.get(name)
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

export default Restaurant
