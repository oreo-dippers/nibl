import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  restaurants: []
};


const restaurantsSearchReducer = function(state=initialState, action) {
  switch(action.type) {
    case types.GET_RESTAURANTS_SUCCESS:
      console.log('GET_RESTAURANTS_SUCCESS', 'state', state)
      return Object.assign({}, state, {restaurants: action.restaurants})
    default: return state;
  }

};




export default restaurantsSearchReducer;
