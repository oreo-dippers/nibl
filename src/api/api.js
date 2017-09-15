import axios from 'axios';

import { getRestaurantsSuccess } from '../actions/restaurantSearch-action';

const FIREBASE = `http://localhost:5001/oreo-nibl/us-central1/app`;
const EXPRESS = `http://localhost:3006`;


export function getRestaurants(request, dispatch) {

  return axios.get(`${FIREBASE}/api/restaurants`, request)
      .then(res => {
        console.log('successful getRestaurants!');
        console.log('res.data', res.data);
        dispatch(getRestaurantsSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
      });
}
