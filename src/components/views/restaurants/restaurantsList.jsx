import React, { Component } from 'react';
import RestaurantCard from './restaurantCard'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.
const dashify = (str) => {
  return str.toLowerCase().split(' ').join('-')
}

class RestaurantsList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.restaurants.map((r, i) => {
            var store_name = dashify(r.name)
            return (
            <li className="listStyle" key={i}>
                <RestaurantCard restaurant={r} />
            </li>
          )})
        }
      </ul>
    )
  }
}

export default RestaurantsList
