import React, { Component } from 'react';
import RestaurantCard from './restaurantCard'

class RestaurantsList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.restaurants.map((r, i) => (
            <li className="listStyle" key={i}>
                <RestaurantCard restaurant={r} />
            </li>
          ))
        }
      </ul>
    )
  }
}

export default RestaurantsList
