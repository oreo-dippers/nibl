import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuCard from '../static/menuCard';

class Restaurant extends Component {
  render() {
    const venue = this.props.location.state.venue;
    const imageUrl = JSON.parse(venue.imageUrl)    
    const {prefix, suffix} = imageUrl;
    const address = JSON.parse(venue.address).join(", ");
    const img = `${prefix}500${suffix}`;

    if (!venue) {
      return <div>Sorry, but the restaurant was not found</div>;
    }

    return (
      <div className="ui container">
        <center>
          <div className="ui huge header" style={{'font-size': '5em'}}>
            RESTAURANT
          </div>
        </center>
        <div className="ui container">
          <div className="ui card fluid">
            <div className="ui slide masked reveal image">
              <img
                src="https://placekitten.com/900/400"
                className="visible content"
                alt="food"
              />
              <img
                src="http://www.fillmurray.com/900/400"
                className="hidden content"
                alt="food"
              />
            </div>
          </div>
        </div>

        <h2 style={{'font-size': '3em'}}> {venue.name} </h2>

        <div className="meta"> Rating: {venue.avgRating} </div>
        <div className="ui huge header" style={{'font-size': '1em'}}>
          Address: {address}
          <br /> Phone Number: {venue.phone}
        </div>
        <h3>
          Born in Japan, Jiron San has always dreamed of opening a resturaunt in
          the United States of America. So after saving up his lunch money for a
          year he decided to buy a plane ticket and fly to the greatest Nation
          in the world to spread his culture and taste in food with the locals.
          Being 10, he found it hard to sign up for the licenses necessary to
          open a resturaunt so he forged a license and wore a fake beard and
          eventually he grew into the beard and he no longer had to fake his
          identity . He is a man that is full of wisdom and experience. Like he
          always would say every morning “ありがとうございました”. We would always say back
          “You are an inspriation to us all” He would then say “ あなたは日本語を話せません”.
          what a wise man.
        </h3>
        <center>
          <div className="ui huge header" style={{fontSize: '5em'}}>
            MENU
          </div>
        </center>
        <div className="ui container ">
          <div className="ui centered cards">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
        <h2>
          <Link to="/restaurants">Back</Link>
        </h2>
      </div>
    );
  }
}

export default Restaurant;
