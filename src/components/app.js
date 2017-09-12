import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Menu } from 'semantic-ui-react';

import axios from 'axios';
import Header from './header';
import Main from './main';
import Footer from './presentational/footer';
import SearchBar from './searchBar';
import Home from './home';

const FIREBASE = `http://localhost:5001/oreo-nibl/us-central1/app`;
const EXPRESS = `http://localhost:3006`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			host: 'dev',
			restaurants: [],
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
		axios
			.get(`${FIREBASE}/api/restaurants`, request)
			.then(res => {
				console.log('successful get!');
				console.log('res', res.data);
				var restaurants = res.data.response.groups[0].items;
				console.log('restaurants', restaurants);
				this.setState({ restaurants });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		const { restaurants } = this.state;
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

export default App;
