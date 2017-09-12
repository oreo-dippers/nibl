import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

// import reducers from './reducers';
import App from './components/app';
import './styles/app.scss';

const store = createStore(()=>{})

const history = createHistory();
const middleware = routerMiddleware(history);

const Router = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

render(<Router />, document.getElementById('root'));
