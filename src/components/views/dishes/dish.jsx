import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuCard from './menuCard';
import CommentCard from '../static/commentCard';
import axios from 'axios';
import {Button,Header,Image,Modal,Comment,Feed,Icon,Card,Rating } from 'semantic-ui-react';
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
    // const theDish = this.props.location.state.dish;
    console.log('aaaaaaaa: ' ,this.props.location.state.dish)
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

  // const {prefix, suffix} = imageUrl;
  // const img = `${prefix}800x400${suffix}`;

  render() {
    const { dish } = this.props.location.state;
    if (!dish) {
      return <div>Sorry, but the dish was not found</div>;
    }

    return (
      <div className="ui container">
     
        <br/>
        <br/>
        <br/>
        <br/>
        
          <Card fluid centered>

          <Card.Content>
          {/*<Image src={img} />*/}
            <h2 style={{fontSize: '3em'}}> {this.props.location.state.dish.name} </h2>
          </Card.Content>

          <Card.Content extra>
            <Icon name="dollar" />
            Price: {this.props.location.state.dish.price}
          </Card.Content>


          <Card.Content extra>
            <Icon name="thumbs outline up" />
            Rating:  <Rating defaultRating={this.props.location.state.dish.avgDishRating} maxRating={5} disabled />
          </Card.Content>
        </Card>
          
    
  

    
        <center>

          <div className="ui huge header" style={{fontSize: '5em'}}>
           recommendations
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
