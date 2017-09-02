import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="/" className="nav 1">Home</Link>
          <Link to="/dishes" className="nav 2">Dishes</Link>
        </div>
      </div>
    )
  }
}

export default Header;
