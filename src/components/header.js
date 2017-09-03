import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { auth, googleAuthProvider } from './firebase';

// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/restaurants'>Restaurants</Link></li>
//         <li><Link to='/dishes'>Dishes</Link></li>
//       </ul>
//       <div className="signIn">
//         <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
//           Sign In
//         </button>
//       </div>
//     </nav>
//   </header>
// )

class Header extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: null,
        currentUser: null,
      };
  }

  componentDidMount(){
    auth.onAuthStateChanged((currentUser) =>{
      console.log('AUTH_CHANGE', currentUser)
      this.setState({currentUser});
    })
  }

  render(){
    const {currentUser} = this.state;

    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/restaurants'>Restaurants</Link></li>
            <li><Link to='/dishes'>Dishes</Link></li>
          </ul>

          {!currentUser &&
            <div className="signIn">
              <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                Sign In
              </button>
            </div>
           }

           {currentUser &&
             <div>
               <h1>{this.state.currentUser.displayName}</h1>
               <img src={this.state.currentUser.photoURL}/>
               <h1>You are Now Logged In</h1>
               <button
                  className="CurrentUser--signout"
                  onClick={() => auth.signOut()}>
                Sign Out
               </button>
            </div>
           }
        </nav>
      </header>
  );
  }
};// end of class

export default Header
