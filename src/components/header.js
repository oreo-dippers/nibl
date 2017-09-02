import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        This is the header
        <div className="navbar">
          <Link to="/" className="nav 1">Home</Link>
          <Link to="/dishes" className="nav 2">Dishes</Link>
          <Link to="/restaurants" className="nav 3">Restaurants</Link>
        </div>
      </div>
    )
  }
}

export default Header;
