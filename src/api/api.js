import axios from 'axios';
import dishesData from '../data/dishes_api'
import {
  getRestaurantsSuccess,
  getDishesSuccess,
 } from '../actions/restaurantSearch-action';


console.log('process.env.HOST', process.env.HOST);
export function getRestaurants(reqData, dispatch) {

  return axios.get(`${process.env.HOST}/api/restaurants`, reqData)
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
  // return axios.get(`${process.env.HOST}/api/dishes`, reqData)
  //   .then(res => {
  //     console.log('%c get /api/dishes SUCCESS!!', 'color: green')
  // const dishesData = res.data
  //     dispatch(getDishesSuccess(dishesData));
  //   })
  //   .catch(err => {
  //     console.log('%c get /api/dishes FAIL!!', 'color: red', err)
  //   })
}
