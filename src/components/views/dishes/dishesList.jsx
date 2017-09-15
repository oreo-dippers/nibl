import React, { Component } from 'react';
import RestaurantCard from '../static/restaurantCard'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.
const dashify = (str) => {
  return str.toLowerCase().split(' ').join('-')
}

class DishesList extends Component {

  render() {
    console.log('\'hi from RestaurantsList\'', 'hi from RestaurantsList');
    console.log(this.props)
    return ( <div> hi from dish list</div>
      // <ul>
      //   {
      //     this.props.restaurants.map((r, i) => {
      //       console.log('This is R: ' , r);
      //       var store_name = dashify(r.name)
      //       return (
      //       <li className="listStyle" key={r.fourSquareId}>
      //           <RestaurantCard restaurant={r} />
      //       </li>
      //     )})
      //   }
      // </ul>
    )
  }
}

export default DishesList
