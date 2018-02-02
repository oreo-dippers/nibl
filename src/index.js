import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import store from './store';
import './styles/app.scss';
import MainContainer from './containers/mainContainer'

const history = createHistory();
const middleware = routerMiddleware(history);
export default history;

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
};

render(MainContainer);

if (module.hot) {
  module.hot.accept('./containers/mainContainer', () => {
    const NextComponent = require('./containers/mainContainer').default;
    render(NextComponent);
  })
}
