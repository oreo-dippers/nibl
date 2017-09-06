import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.
class RestaurantsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.restaurants.map(r => (
              <li key={r.store_id}>
                <Link
                  to={{
                    pathname: `/restaurants/${r.name}`,
                    state: { restaurant: r }
                  }}
                  >
                  {r.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default RestaurantsList
