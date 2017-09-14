import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
// import reducers
import restaurantsSearchReducer from './restaurantsSearchReducer'
// combine reducers

const reducers = combineReducers({
  restaurantsState: restaurantsSearchReducer,
  routing: routerReducer
})


export default reducers;
