import React from 'react'
import Header from './header'
import Main from './main'

import { Switch, Route } from 'react-router-dom'
import Home from './home'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App
