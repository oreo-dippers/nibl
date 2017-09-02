import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header'

import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <br/>
        <br/>
        Hi from Home Component
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    )
  }
}

export default App;
