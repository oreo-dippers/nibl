import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header'

import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
        hi from app
        <Header />

        <Footer />
      </div>
    )
  }
}

export default App;
