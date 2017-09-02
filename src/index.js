import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss'
import MainRouter from './components/main-router'
import { BrowserRouter } from 'react-router-dom';


var Router = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))

console.log('hello from app.js!')
