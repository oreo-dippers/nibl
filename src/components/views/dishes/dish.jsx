import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuCard from './menuCard';
import CommentCard from '../static/commentCard'

// {
//   foursquareEntryId: "107410403",
//   name: "Arugula Salad",
//   imageUrl: "",
//   description: "With roasted farm beets, pickled red onions, Vermont Creamery goat cheese schmear, apple cider vinaigrette",
//   price: "11.00",
//   avgRating: 0
// }


class Dish extends Component {

  render() {
    console.log('DISHHHHHHHH this.props',this.props)
    const { dish } = this.props.location.state;

    if (!dish) {
      return <div>Sorry, but the dish was not found</div>;
    }

    return (
      <div className="ui container">
        <center>
          <div className="ui huge header" style={{'font-size': '5em'}}>
            DISH
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

        <h2 style={{'font-size': '3em'}}> {dish.name} </h2>

        <div className="meta">
          Rating: {dish.avgRating}
        </div>
        <div className="ui huge header" style={{'fontSize': '1em'}}>
          Address: {	dish.address && dish.address.join(', ') }
          <br />
          Phone Number: {dish.phone}
        </div>
        <h3>
          {dish.description}
        </h3>
        <center>

    





          <div className="ui huge header" style={{fontSize: '5em'}}>
            Recommendations
          </div>
        </center>
        <CommentCard />
        <div className="ui container ">
          <div className="ui centered cards">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
        <h2>
          <Link to="/dishes">Back</Link>
        </h2>
      </div>
    );
  }
}

export default Dish;
