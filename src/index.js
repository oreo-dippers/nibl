import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import store from './store';
// import App from './components/app';
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
        {console.log('history', history)}
      </div>
    </ConnectedRouter>
  </Provider>
)

render(<Router />, document.getElementById('root'));
