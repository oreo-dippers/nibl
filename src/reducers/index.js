import { combineReducers } from 'redux';

// import reducers
import restaurantsSearchReducer from './restaurantsSearchReducer'
// combine reducers

const reducers = combineReducers({
  restaurantsState: restaurantsSearchReducer
})


export default reducers;
