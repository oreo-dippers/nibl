import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar'
import { auth, googleAuthProvider } from '../firebase';
import CheckBox from './checkBox';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
      searchBy: 'dishes',
			currentUser: null
		};

    this.setNavState = this.setNavState.bind(this);
	}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			console.log('AUTH_CHANGE', currentUser);
			this.setState({ currentUser });
		});
	}

  setNavState(searchBy) {
    this.setState({ searchBy });
  }

	render() {
		const { currentUser } = this.state;
    console.log('this.state', this.state);
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
              <SearchBar
                {...this.props}
                searchBy={this.state.searchBy}
              />
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
									style={{ color: '#FFFFFF' }}
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
        <br/>
			</div>
		);
	}
}
