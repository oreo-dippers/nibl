import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Main from './main'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
