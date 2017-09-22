import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import MenuCard from './menuCard';
import CommentCard from '../static/commentCard';
import Footer from '../static/footerhome';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Card,
  Rating } from 'semantic-ui-react';

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
    const { foursquareEntryId } = this.props.location.state.dish;
    const request = {params: { foursquareEntryId }}
    axios.get(`${process.env.HOST}/api/dishes/review`, request)
      .then(res => {
        console.log('%c <Dish /> api/dishes/review INITIAL GET SUCCESS!!', 'color: green')
        console.log('<Dish /> res.data', JSON.stringify(res.data, null, 2));

        if(Array.isArray(res.data)) {
          this.setState({comments: res.data});
        }
        
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
    console.log('dish', dish);
    if (!dish) {
      return <div>Sorry, but the dish was not found</div>;
    }

    return (
      <div>
      <div className="ui container">

        <br/>
        <br/>
        <br/>
        <br/>
         <Image src={this.props.location.state.dish.imageUrl} />
        
          <Card fluid centered>

          <Card.Content>
            <h2 style={{fontSize: '3em'}}> {this.props.location.state.dish.name} </h2>
          </Card.Content>

          <Card.Content extra>
            <Icon name="dollar" />
            Price: {dish.price}
          </Card.Content>


          <Card.Content extra>
            <Icon name="thumbs outline up" />
            Rating:  <Rating defaultRating={dish.avgDishRating} maxRating={5} disabled />
          </Card.Content>
        </Card>
        <CommentCard {...this.props} {...this.state} setDishState={this.setDishState}/>

        <h2>
          <Link to="/dishes">Back</Link>
        </h2>
      
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
      </div>
    );
  }
}

export default Dish;
