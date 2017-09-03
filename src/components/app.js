import React, { Component } from 'react'
import Header from './header'
import Main from './main'

import { Switch, Route } from 'react-router-dom'
import Home from './home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'testing state 123'
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Main test={this.state.test}/>
      </div>
    )
  }
}


export default App
