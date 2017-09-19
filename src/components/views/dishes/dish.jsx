import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuCard from './menuCard';
import CommentCard from '../static/commentCard';
import axios from 'axios';

// {
//   foursquareEntryId: "107410403",
//   name: "Arugula Salad",
//   imageUrl: "",
//   description: "With roasted farm beets, pickled red onions, Vermont Creamery goat cheese schmear, apple cider vinaigrette",
//   price: "11.00",
//   avgRating: 0
// }


class Dish extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    }
    this.setDishState = this.setDishState.bind(this);
  }

  componentDidMount() {
    const { foursquareEntryId } = this.props.location.state.dish
    const request = {params: {foursquareEntryId}}
    axios.get(`${process.env.HOST}/api/dishes/review`, request)
      .then(res => {
        console.log('%c <Dish /> api/dishes/review INITIAL GET SUCCESS!!', 'color: green')
        console.log('<Dish /> res.data', JSON.stringify(res.data, null, 2));
        this.setState({comments: res.data});
      })
      .catch(err => {
        console.log('%c <Dish /> api/dishes/review INITIAL GET FAIL!!', 'color: red', err)
      })
  }

  setDishState(stateObj) {
    this.setState(stateObj);
  }

  render() {
    const { dish } = this.props.location.state;
    if (!dish) {
      return <div>Sorry, but the dish was not found</div>;
    }

    return (
      <div className="ui container">
        <center>
          <div className="ui huge header" style={{'fontSize': '5em'}}>
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

        <h2 style={{'fontSize': '3em'}}> {dish.name} </h2>

        <div className="meta">
          Rating: {dish.avgDishRating}
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
        <CommentCard {...this.props} {...this.state} setDishState={this.setDishState}/>
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
