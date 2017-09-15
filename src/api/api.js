import axios from 'axios';
import dishesData from '../data/dishes_api'
import {
  getRestaurantsSuccess,
  getDishesSuccess,
 } from '../actions/restaurantSearch-action';

const FIREBASE = `http://localhost:5001/oreo-nibl/us-central1/app`;
const EXPRESS = `http://localhost:3006`;
const DEPLOY = `https://us-central1-oreo-nibl.cloudfunctions.net/app`;


export function getRestaurants(reqData, dispatch) {

  return axios.get(`${FIREBASE}/api/restaurants`, reqData)
    .then(res => {
      console.log('successful getRestaurants!');
      console.log('res.data', res.data);
      const restaurantData = res.data
      dispatch(getRestaurantsSuccess(restaurantData));
    })
    .catch(err => {
      console.log(err);
    });
}


export function getDishes(reqData, dispatch) {
  console.log('dishesData', dishesData)
  dispatch(getDishesSuccess(dishesData));
  // return axios.get(`${FIREBASE}/api/dishes`, reqData)
  //   .then(res => {
  // const dishesData = res.data
  //     dispatch(getDishesSuccess(dishesData));
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
}
