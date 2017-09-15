import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import * as api from '../../api/api';
import history from '../../index'

class SearchBar extends Component {


  searchByRestaurant(e) {
		e.preventDefault();
    const { searchBy } = this.props;
    const restaurantQuery = this._restaurants.value
    const request = {
      params: {
        query: restaurantQuery,
        near: 'Los Angeles, CA, United States',
        radius: '5000'
      }
    };
    console.log('this', this)
    if (searchBy === 'restaurants') {
      history.push('/restaurants')
      api.getRestaurants(request, this.props.dispatch);

    } else {
      history.push('/dishes');

    }




	}
	render() {
    // console.log('====================this.props')
    // console.log('this.props', this.props)
		return (
			<div>

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
