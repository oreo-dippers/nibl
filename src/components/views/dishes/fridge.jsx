import React, {Component} from 'react';
import axios from 'axios';
import {
  Header,
  Image,
  Modal,
  Card,
  Rating
} from 'semantic-ui-react';
import Footer from '../static/footerhome';

class Fridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    }
  }
  componentDidMount() {
    const firebaseId = String(localStorage.getItem('UserId'));
    const reqQuery = {
      params: {
        firebaseId,
      }
    }
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
                 <Modal  key={i} trigger={
                  <li className="menuliststyle">
                    <Card color="teal" image={r.imageUrl} />
                  </li>
                  }>
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
