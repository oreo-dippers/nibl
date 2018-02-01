import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import store from './store';
import './styles/app.scss';
import MainContainer from './containers/mainContainer'

const history = createHistory();
const middleware = routerMiddleware(history);
export default history;

const Router = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <MainContainer />
      </div>
    </ConnectedRouter>
  </Provider>
)

render(<Router />, document.getElementById('root'));
