import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'
// var Rating = require('react-rating');

// const dashify = (str) => {
//   return str.toLowerCase().split(' ').join('-')
// }
// var store_name = dashify(dish.name)


class DishCard extends Component {
	render() {
		// const restaurant = this.props.location.state.restaurant
    console.log('this.props', this.props);
    const { dish } = this.props;
		const {prefix, suffix} = dish.imageUrl;
		const img = `${prefix}800x200${suffix}`
    console.log('img', img);



		if (!dish) {
			return <div>Sorry, but the restaurant was not found</div>;
		}
		return (
			<div className="ui container ">
				<div className="ui fluid card"  >
					<div  className="image" >
						{
              dish.imageUrl && <img
								id="restimg"
                src={img}
                // src="http://wikitravel.org/upload/shared//1/1e/Hong_Kong_Culinary_Banner.jpg"
                alt="bill"
              />
            }
					</div>
					<div className="content">
						<a className="header">
              <Link to={
                {
                  pathname: `/dishes/${dish.name}`,
                  state: {dish}
                }
                }>
                restaurauntCard link : {' '}<h1>{dish.name}</h1>
              </Link>
						</a>
						<div className="meta">
							<Rating
								placeholderRate={5}
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


							{	dish.address && dish.address.join(', ')}
						</a>
					</div>
				</div>
				<div className="ui star rating" data-rating="3" />
			</div>
		);
	}
}

export default DishCard;
