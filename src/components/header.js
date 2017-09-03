import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { auth, googleAuthProvider } from './firebase';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/restaurants'>Restaurants</Link></li>
        <li><Link to='/dishes'>Dishes</Link></li>
      </ul>
      <div className="signIn">
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign In
        </button>
      </div>
    </nav>
  </header>
)

export default Header
