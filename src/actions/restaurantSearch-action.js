import * as types from './action-types';


export function getRestaurantsSuccess(restaurants) {
  return {
    type: types.GET_RESTAURANTS_SUCCESS,
    restaurants
  }
};

