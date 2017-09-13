import axios from 'axios';
import store from '../store';

import { getRestaurantsSuccess } from '../actions/restaurantSearch-action';

const FIREBASE = `http://localhost:5001/oreo-nibl/us-central1/app`;
const EXPRESS = `http://localhost:3006`;


export function getRestaurants(request) {
  return axios.get(`${FIREBASE}/api/restaurants`, request)
      .then(res => {
        console.log('successful getRestaurants!');
        console.log('res.data', res.data);
        var restaurants = res.data.response.groups[0].items;
        console.log('restaurants', restaurants);
        // this.setState({ restaurants });
        store.dispatch(getRestaurantsSuccess(restaurants));
      })
      .catch(err => {
        console.log(err);
      });
}



// submitrestaurantQuery(restaurantQuery) {
//   this.setState({ restaurantQuery });
//   console.log('restaurantQuery', restaurantQuery);
//
//   var request = {
//     params: {
//       query: restaurantQuery,
//       near: 'Los Angeles, CA, United States',
//       radius: '5000'
//     }
//   };

// }
