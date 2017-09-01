import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss'
import App from './components/app.js'
import { BrowserRouter } from 'react-router-dom';


var Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))

console.log('hello from app.js!')
