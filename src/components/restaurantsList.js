import React from 'react'
import RestaurantsAPI from '../restaurants_api'
import { Link } from 'react-router-dom'

// The RestaurantsList iterates over all of the restaurants and creates
// a link to their profile page.
const RestaurantsList = () => (
  <div>
    <ul>
      {
        RestaurantsAPI.all().map(r => (
          <li key={r.store_id}>
            <Link to={`/restaurants/${r.name}`}>{r.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default RestaurantsList
