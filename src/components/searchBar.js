import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Menu } from 'semantic-ui-react';

class SearchBar extends Component {
	passQueryToSumbitRestaurantQuery(e) {
		e.preventDefault();
		var restaurantQuery = this._restaurants.value;
		console.log('restaurantQuery', restaurantQuery);
		this.props.submitrestaurantQuery(restaurantQuery);
	}
	render() {
		return (
			<center>
		<div >
				<div className="ui centered container">
				<br/>
				<br/>
			
					<Link to="/restaurants">
				
						<Form onSubmit={this.passQueryToSumbitRestaurantQuery.bind(this)} placeholder="search here">
							<div className="ui icon input">
								<input ref={d => (this._restaurants = d)} />
								{/*<Link to="/restaurants">
								<Button onClick={this.passQueryToSumbitRestaurantQuery.bind(this)} className="ui primary button">
									Search
								</Button>
							 </Link>*/}
								<i className="search icon" />
							</div>
						</Form>
					</Link>
					You Searched: {this.props.restaurantQuery} 
					
				</div>
		</div>
		</center>
		);
	}
}

export default SearchBar;
