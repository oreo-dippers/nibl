import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var Rating = require('react-rating');

class ResturauntCard extends Component {
	render() {
		console.log('this', this);
		console.log('this.props.location.state', this.props.location.state);

		const restaurant = this.props.location.state.restaurant;
		console.log('restaurant', restaurant);
		if (!restaurant) {
			return <div>Sorry, but the restaurant was not found</div>;
		}
		return (
			<div className="ui container ">
				<div className="ui star rating" data-rating="3" />
				<div className="ui fluid card">
					<div className="image">
						<img src="http://wikitravel.org/upload/shared//1/1e/Hong_Kong_Culinary_Banner.jpg" alt="bill" />
					</div>
					<div className="content">
						<a className="header">
							<h1>{restaurant.name}</h1>
						</a>
						<div className="meta">
							<Rating
								placeholderRate={3.5}
								full={<img src="https://thumb.ibb.co/fgib4F/star_full.png" className="icon" alt="" />}
								placeholder={
									<img src="https://thumb.ibb.co/fgib4F/star_full.png" className="icon" alt="" />
								}
								empty={<img src="https://thumb.ibb.co/ijDnBv/star_empty.png" className="icon" alt="" />}
							/>
							<span className="date">342 Ratings</span>
						</div>
						<div className="description">
							We serve an obsene amount of Ramen, at any point and any time. We serve asian inspired Ramen
							made with Indian Ingredients. It is the most special thing you will ever have the pleasure
							of eating....
						</div>
					</div>
					<div className="extra content">
						<a>
							<i className="map outline icon" />
							{restaurant.location.address}, {restaurant.location.city}, {restaurant.location.state}
						</a>
					</div>
				</div>
				<div className="ui star rating" data-rating="3" />
			</div>
		);
	}
}

export default ResturauntCard;
