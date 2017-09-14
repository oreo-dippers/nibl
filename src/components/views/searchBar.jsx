import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import * as api from '../../api/api';
import history from '../../index'

class SearchBar extends Component {
	searchByRestaurant(e) {
		e.preventDefault();
    var restaurantQuery = this._restaurants.value
		console.log('restaurantQuery11', restaurantQuery);
    var request = {
			params: {
				query: restaurantQuery,
				near: 'Los Angeles, CA, United States',
				radius: '5000'
			}
		};

    console.log('history', history);
    history.push('/restaurants')
    api.getRestaurants(request);
	}
	render() {
    console.log('====================this.props')
    console.log('this.props', this.props)
		return (
			<div className="ui centered container">

				<Form
          onSubmit={this.searchByRestaurant.bind(this)}
          placeholder="search here"
        >
          <div className="ui icon input">
						<input
              type="text"
              ref={d => (this._restaurants = d)}
            />
						<i className="search icon"/>
          </div>
				</Form>
			</div>
		);
	}
}

export default SearchBar;
