import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Card,
  Rating
} from 'semantic-ui-react';
import MenuCard from '../restaurants/menuCard';
import Footer from '../static/footerhome';

const sampleFav = [
  {
    avgDishRating: 4,
    description: 'this fresh mozz is from italy',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '8.25'
  },
  {
    avgDishRating: 3,
    description: 'this dish is from',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '2.25'
  },
  {
    avgDishRating: 1,
    description: 'this is a dish',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '5.25'
  },
  {
    avgDishRating: 2.5,
    description: 'great great great',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '1.25'
  },
  {
    avgDishRating: 3.2,
    description: 'great great great',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '2.25'
  },
  {
    avgDishRating: 4,
    description: 'great great great',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '8.00'
  },
]

class Fridge extends Component {
  constructor() {
    super();
    this.state = {
      favorites: sampleFav,
    }

  }
  componentDidMount() {
    const firebaseId = String(localStorage.getItem('UserId'));
    const reqQuery = {
      params: {
        firebaseId
      }
    }
    console.log('reqQuery', reqQuery);

    axios.get(`${process.env.HOST}/api/user/fridge`, reqQuery)
      .then(req => this.setState({ favorites: req.data }))
      .then(req => console.log('get favorited! success', req.data))
      .catch(err => console.log('get favorited! fail', err))
  }
  render() {
    return (
      <div>
      <div className="ui container ">
        <br />
        <br />
        <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/fridge.png?alt=media&token=6568beb0-f5ce-4505-8081-7a4c7854c0bb"/>
        <center>This is where we keep your favorite dishes! </center>  
        <br />
        <br />

        <Card.Group itemsPerRow={4}>
          {this.state.favorites.map((r, i) => {
            return (
               <Modal trigger={       <li className="menuliststyle" key={i}>
                <Card color="teal" image={r.imageUrl} />

              </li>             }>

    <Modal.Content image>
      <Image wrapped size='medium' src={r.imageUrl} />
      <Modal.Description>
      <h1>Dish Name: {r.name}</h1>
      <Header>Price: ${r.price}</Header>
        <Header> <Rating maxRating={5} defaultRating={r.avgDishRating} icon='star' size='large' /> </Header>
        <p>{r.description}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
            );
          })}
        </Card.Group>





    


      </div>
      <br /> <br /> <br /> <br />  
      <Footer />
      </div>
    );
  }
}

export default Fridge;
