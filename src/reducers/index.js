import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import restaurantsSearchReducer from './restaurantsSearchReducer'

const reducers = combineReducers({
  restaurantsState: restaurantsSearchReducer,
  routing: routerReducer
})

export default reducers;
