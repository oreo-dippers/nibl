import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Menu } from 'semantic-ui-react';

import axios from 'axios';
import Header from './header';
import Main from './main';
import Footer from './views/footer';
import SearchBar from './searchBar';
import Home from './home';

// import ajax
import * as api from '../api/api';

// import redux things
import store from '../store';
import { connect } from 'react-redux';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// host: 'dev',
			// restaurants: [],
			restaurantQuery: ''
		};
		this.submitrestaurantQuery = this.submitrestaurantQuery.bind(this);
	}

	submitrestaurantQuery(restaurantQuery) {
		this.setState({ restaurantQuery });
		console.log('restaurantQuery', restaurantQuery);

		var request = {
			params: {
				query: restaurantQuery,
				near: 'Los Angeles, CA, United States',
				radius: '5000'
			}
		};

    api.getRestaurants(request);
		// axios
		// 	.get(`${FIREBASE}/api/restaurants`, request)
		// 	.then(res => {
		// 		console.log('successful get!');
		// 		console.log('res', res.data);
		// 		var restaurants = res.data.response.groups[0].items;
		// 		console.log('restaurants', restaurants);
		// 		this.setState({ restaurants });
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}

	render() {
    // console.log('props', props)
    console.log('this', this)
		const { restaurants } = this.props;
		return (
			<div>
				<Header />

				<SearchBar restaurantQuery={this.state.restaurantQuery} submitrestaurantQuery={this.submitrestaurantQuery}/>

				<Main restaurants={restaurants} />
				<Footer />
			</div>
		);
	}
}


const mapStateToProps = function(store) {
  console.log('store', store)
  return {
    restaurants: store.restaurantsState.restaurants
  }
}


// export default App;

export default connect(mapStateToProps)(App)
