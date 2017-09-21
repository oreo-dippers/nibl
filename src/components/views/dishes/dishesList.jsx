import React, { Component } from 'react';
import DishCard from './dishCard'

class DishesList extends Component {
  render() {
  const { dishes } = this.props
    return (
      <ul>
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
