import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import './app.scss';

// const store = createStore(()=>{})

const Router = () => (
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
)

render(<Router />, document.getElementById('root'));
