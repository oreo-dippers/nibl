import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchBar from './searchBar'
import { auth, googleAuthProvider } from './firebase';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			console.log('AUTH_CHANGE', currentUser);
			this.setState({ currentUser });
		});
	}

	render() {
		const { activeItem, currentUser } = this.state;

		return (
			<div>
				<div style={{ background: '#F8F8F8' }} className="ui fluid container">
					<div style={{ background: '#26CDA7' }} className="ui menu">
						<div className="item">
							<Link to="/">
								<div
									className="ui huge header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Nibl
								</div>
							</Link>
						</div>

						<div className="item">
							<Link to="/restaurants">
								<div
									className="ui medium header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Restaurants
								</div>
							</Link>
						</div>

						<div className="item">
							<Link to="/dishes">
								<div
									className="ui medium header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Reviews
								</div>
							</Link>
						</div>


						<div className="item">
							<div className="ui compact menu">
								<div className="ui simple dropdown item">
									Food
									<i className="dropdown icon" />
									<div className="menu">
										<div className="item">Resturaunts</div>
										<div className="item">Food</div>
									</div>
								</div>
							</div>
						</div>

						<div className="right menu">
							{!currentUser && (
								<Menu.Menu position="right">
									<Menu.Item
										style={{ color: '#FFFFFF' }}
										name="login"
										onClick={() => auth.signInWithPopup(googleAuthProvider)}
									/>
								</Menu.Menu>
							)}

							{currentUser && (

								<Menu.Menu position="right">
								<div className="item">
								<img className="ui avatar image" src={currentUser.photoURL} />
								</div>
								<div className="item">

								<h2 style={{ color: '#FFFFFF' }} >{currentUser.displayName}</h2>
								</div>
									<Menu.Item
										style={{ color: '#FFFFFF' }}
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
