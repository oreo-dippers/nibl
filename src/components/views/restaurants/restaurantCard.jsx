import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button,Header,Image,Modal,Comment,Feed,Icon,Card,Rating } from 'semantic-ui-react';
import { dashify } from '../../../helpers';

class RestaurantCard extends Component {
  render() {
    const venue = this.props.restaurant;
    console.log('venue', venue);

    const address = JSON.parse(venue.address).join(', ');
    const {prefix, suffix} = JSON.parse(venue.imageUrl);
    const img = `${prefix}800x200${suffix}`;

    if (!venue) {
      return <div>Sorry, but the restaurant was not found</div>;
    }
    return (
      <div className="ui container ">
        <div className="ui fluid card">
          <div className="image">
            {venue.imageUrl && <img id="restimg" src={img} alt="bill" />}
          </div>
          <div className="content">

            <Link
              className="header"
              to={{
                pathname: `/restaurants/${dashify(venue.name)}`,
                state: {venue},
              }}
            >
              <h1>{venue.name}</h1>
            </Link>
            <div className="description">
              We serve an obsene amount of Ramen, at any point and any time. We
              serve asian inspired Ramen made with Indian Ingredients. It is the
              most special thing you will ever have the pleasure of eating....
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="map outline icon" />
              {address}
            </a>
          </div>
        </div>
        <div className="ui star rating" data-rating="3" />
      </div>
    );
  }
}

export default RestaurantCard;
