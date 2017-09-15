import React, { Component } from 'react';
import DishCard from '../static/dishCard'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.
const dashify = (str) => {
  return str.toLowerCase().split(' ').join('-')
}

class DishesList extends Component {

  render() {
  console.log('this.props', this.props)
  const { dishes }
    return ( <div> hi from dish list</div>
      <ul>
        {
          dishes.restaurants.map((dish, i) => {
            console.log('This is R: ' , r);
            var store_name = dashify(dish.name)
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
