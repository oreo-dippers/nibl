import React, { Component } from 'react';
import RestaurantCard from './restaurantCard'
import Footer from '../static/footerhome';
import {Button,Header,Image,Modal,Comment,Feed,Icon,Card,Rating } from 'semantic-ui-react';


class RestaurantsList extends Component {

  render() {
    return (
      <div>
      <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/search.png?alt=media&token=98ac81c2-4c30-4f34-85ab-b9737ea9dc9d"/>
      <div>
      <ul>
        {
          this.props.restaurants.map((r, i) => (
            <li className="listStyle" key={i}>
                <RestaurantCard restaurant={r} />
            </li>
          ))
        }
      </ul>
      </div>
      
      <Footer />
      </div>
    )
  }
}

export default RestaurantsList
