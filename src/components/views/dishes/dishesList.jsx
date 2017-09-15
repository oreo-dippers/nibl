import React, { Component } from 'react';
import DishCard from './dishCard'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.

class DishesList extends Component {

  render() {
  console.log('this.props', this.props);
  const { dishes } = this.props
    return (
      <ul>
        {
          dishes.map((dish, i) => {
            return (
            <li className="listStyle" key={dish.fourSquareId}>
                <DishCard dish={dish} />
            </li>
          )})
        }
      </ul>
    )
  }
}

export default DishesList
