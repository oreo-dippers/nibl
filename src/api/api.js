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
      console.log('%c /api/restaurants GET SUCCESS!!', 'color: green')
      const restaurantData = res.data
      dispatch(getRestaurantsSuccess(restaurantData));
    })
    .catch(err => {
    console.log('%c /api/restaurants GET FAIL!!', 'color: red')
    });
}


export function getDishes(reqData, dispatch) {
  dispatch(getDishesSuccess(dishesData));
  // return axios.get(`${FIREBASE}/api/dishes`, reqData)
  //   .then(res => {
  //     console.log('%c get /api/dishes SUCCESS!!', 'color: green')
  // const dishesData = res.data
  //     dispatch(getDishesSuccess(dishesData));
  //   })
  //   .catch(err => {
  //     console.log('%c get /api/dishes FAIL!!', 'color: red', err)
  //   })
}
