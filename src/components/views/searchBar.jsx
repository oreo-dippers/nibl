import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import * as api from '../../api/api';
import history from '../../index'

class SearchBar extends Component {
  constructor() {
    super();
    this.searchByRestaurant = this.searchByRestaurant.bind(this)
  }

  searchByRestaurant(e) {
		e.preventDefault();
    const { searchBy } = this.props;

    const restaurantQuery = this._restaurants.value
    const request = {
      params: {
        query: restaurantQuery,
        near: 'San Francisco, CA, United States',
        radius: '5000'
      }
    };
    if (searchBy === 'restaurants') {
      history.push('/restaurants')
      api.getRestaurants(request, this.props.dispatch);

    } else {


      history.push('/dishes');
      api.getDishes(request, this.props.dispatch);


    }




	}
	render() {
		return (
			<div>

				<Form
          onSubmit={this.searchByRestaurant}
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
