import React, {Component} from 'react';
import {Button, Header, Image, Modal, Menu, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import SearchBar from './searchBar';
import {database, auth, googleAuthProvider} from '../firebase';
import pick from 'lodash/pick';
import CheckBox from './checkBox';
import axios from 'axios';


export default class Nav extends Component {
  constructor(props) {
		super(props);
		this.usersRef = null;
		this.userRef = null;
    this.state = {
			searchBy: 'restaurants',
			currentUser: null,
			users:{},
      userData: null,
    };

    this.setNavState = this.setNavState.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
			if(currentUser){

				const theuserdata = {
					user_photoURL: currentUser.photoURL,
					user_displayName: currentUser.displayName,
					user_email: currentUser.email,
				}


        const userObj = {
          userId: currentUser.uid,
          userData: JSON.stringify(theuserdata),
        }
				this.setState({userData: userObj.params})
        // window.UserData = userObj.params
        localStorage.setItem('UserData', userObj.userData)
        localStorage.setItem('UserId', userObj.userId)
				axios.post(`${process.env.HOST}/api/user`, userObj)
				.then(function(res) {
          console.log('%c /api/user POST SUCCESS!!', 'color: green')
				})
				.catch(function(err) {
          console.log('%c /api/user POST FAIL!!', 'color: red', err)
				})

				this.setState({currentUser});
				this.usersRef = database.ref('/users');
				this.userRef = this.usersRef.child(currentUser.uid);
				this.userRef.once('value').then((snapshot)=>{
					if(snapshot.val()) return;
					const userData = pick(currentUser, ['displayName', 'photoURL', 'email']);
					this.userRef.set(userData);
				});
			  	this.usersRef.on('value', (snapshot) =>{
					this.setState({users: snapshot.val()});
				})
			}
    });
  }

  setNavState(searchBy) {
    this.setState({searchBy});
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div>
        <div style={{background: '#F8F8F8'}} className="ui fluid container">
          <div style={{background: '#66DFB7'}} className="ui menu">
            <div className="item">
              <Link to="/">
                <div
                  className="ui huge header"
                  style={{color: '#FFFFFF'}}
                  onClick={this.handleItemClick}
                >
                  Nibl
                </div>
              </Link>
            </div>

            <div className="item">
              <SearchBar {...this.props} searchBy={this.state.searchBy} />
            </div>

            <div className="item">
              <CheckBox
                searchBy={this.state.searchBy}
                setNavState={this.setNavState}
              />
            </div>

            <div className="right menu">

            <div className="item">
             <Link to="/fridge">
                <Icon name='heart' size='big' inverted/>
             </Link>
            </div>
              {!currentUser && (
                <Menu.Menu position="right">
                  <Menu.Item
                    style={{color: '#FFFFFF'}}
                    name="login"
                    onClick={() => auth.signInWithPopup(googleAuthProvider)}
                  />
                </Menu.Menu>
              )}

              {currentUser && (
                <Menu.Menu position="right">
                  {/*<div className="item">
                    <img
                      className="ui avatar image"
                      src={currentUser.photoURL}
                    />
                  </div>*/}
                  <div className="item">
                    <Modal
                      trigger={
                        <h2 style={{color: '#FFFFFF'}}>
                          {currentUser.displayName}
                        </h2>
                      }
                    >
                      <Modal.Header>Your Profile</Modal.Header>
                      <Modal.Content image>
                        <Image
                          wrapped
                          size="medium"
                          src={currentUser.photoURL}
                        />
                        <Modal.Description>
                          <h1>{currentUser.displayName}</h1>
                          <b>Email: </b> {currentUser.email}
                          <br />
                          <b>User ID: </b> {currentUser.uid}
                          <br />
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </div>
                  <Menu.Item
                    style={{color: '#FFFFFF'}}
                    name="logout"
                    onClick={() => auth.signOut()}
                  />
                </Menu.Menu>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
