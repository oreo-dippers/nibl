import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Menu } from 'semantic-ui-react';

import axios from 'axios';
import Header from './header';
import Main from './main';
import Footer from './footer';
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

	componentDidMount() {}

	submitrestaurantQuery(restaurantQuery) {
		
		// let restaurantQuery = this._restaurants.value;
		this.setState({ restaurantQuery });
		console.log('restaurantQuery', restaurantQuery);

		// example post
		// const data = {
		//   query: restaurantQuery,
		//   near: 'Los Angeles, CA, United States',
		//   radius: '5000'
		// }
		// axios.post(`${DEV}/test`, data)
		//   .then((res)=> {
		//     console.log('successful post!')
		//     console.log('res.data', res.data);
		//   })
		//   .catch((err) => {
		//     console.log(err)
		//   })

		var request = {
			params: {
				query: restaurantQuery,
				near: 'Los Angeles, CA, United States',
				radius: '5000'
			}
		};
		axios
			.get(`${EXPRESS}/api/restaurants`, request)
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
				<br />
				<br />
				<SearchBar restaurantQuery={this.state.restaurantQuery} submitrestaurantQuery={this.submitrestaurantQuery}/>

				<Main restaurants={restaurants} />
				<Footer />
			</div>
		);
	}
}

export default App;
