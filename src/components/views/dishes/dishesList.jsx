import React, { Component } from 'react';
import DishCard from './dishCard'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.

class DishesList extends Component {
  render() {
  const { dishes } = this.props
    return (
      <ul>
        <span style={{color:'black'}}>HI I AM A DISHESLIST</span>
        {
          dishes.map((dish, i) => {
            return (
            <li className="listStyle" key={i}>
                <DishCard dish={dish} />
            </li>
          )})
        }
      </ul>
    )
  }
}

export default DishesList
