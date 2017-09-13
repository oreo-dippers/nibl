import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import SearchBar from './searchBar'
import { auth, googleAuthProvider } from './firebase';




class Nav extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
    this.handleItemClick = this.handleItemClick.bind(this);
	}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			console.log('AUTH_CHANGE', currentUser);
			this.setState({ currentUser });
		});
	}
  handleItemClick() {
    console.log('hi from handleItemClick')
    console.log('withRouter', withRouter);
    console.log('this.props', this.props);
    // this.props.listen((loc, action) => {
    //   // loc is an obj like window.location
    //   console.log(action, loc.pathname, loc.state)
    // })
    this.props.history.push('/')
  }

	render() {
		const { activeItem, currentUser } = this.state;
    var { restaurantQuery, submitrestaurantQuery } = this.props
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


            {/* restaurants */}
						{/* <div className="item">
							<Link to="/restaurants">
								<div
									className="ui medium header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Restaurants
								</div>
							</Link>
						</div> */}




            {/* food */}
						{/* <div className="item">
							<Link to="/food">
								<div
									className="ui medium header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Food
								</div>
							</Link>
						</div> */}


            {/* reviews */}
						{/* <div className="item">
							<Link to="/reviews">
								<div
									className="ui medium header"
									style={{ color: '#FFFFFF' }}
									onClick={this.handleItemClick}
								>
									Reviews
								</div>
							</Link>
						</div> */}

            {/* //food // restaurants
            // Menu */}

            <div className="item">
              <SearchBar restaurantQuery={restaurantQuery} submitrestaurantQuery={submitrestaurantQuery}/>
            </div>
						{/* <div className="item">
              <div>
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
						</div> */}
            {/* <SearchBar restaurantQuery={restaurantQuery} submitrestaurantQuery={submitrestaurantQuery}/> */}

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


export default withRouter(Nav)
