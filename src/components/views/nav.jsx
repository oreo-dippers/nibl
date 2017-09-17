import React, {Component} from 'react';
import {Button, Header, Image, Modal, Menu} from 'semantic-ui-react';
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
			searchBy: 'dishes',
			currentUser: null,
			users:{},
    };

    this.setNavState = this.setNavState.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
			// console.log('AUTH_CHANGE', currentUser);
			console.log(currentUser);
			if(currentUser){
				
				const theuserdata = {
					user_photoURL: currentUser.photoURL,
					user_displayName: currentUser.displayName,
					user_email: currentUser.email,
				}
			
				const userObj = {
					params:{
						userId: currentUser.uid,
						userData: JSON.stringify(theuserdata),
					}
				}
				
				axios.post('http://localhost:5001/oreo-nibl/us-central1/app/api/user', userObj)
				.then(function(res){
					console.log(res.data)
				})
				.catch(function(err){
					console.log(err)
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
          <div style={{background: '#26CDA7'}} className="ui menu">
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

            <div className="item">
              <Link to="/addphoto">
                <div
                  className="ui medium header"
                  style={{color: '#FFFFFF'}}
                  onClick={this.handleItemClick}
                >
                  Add Photo
                </div>
              </Link>
            </div>

            {/* <div className="item">
							<Link to="/dishes">
								<div
									className="ui medium header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Reviews
								</div>
							</Link>
						</div> */}

            <div className="right menu">
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
                  <div className="item">
                    <img
                      className="ui avatar image"
                      src={currentUser.photoURL}
                    />
                  </div>
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
        <br />
      </div>
    );
  }
}
