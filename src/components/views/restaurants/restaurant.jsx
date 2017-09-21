import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuCard from './menuCard';
import axios from 'axios';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Card,
  Rating,
} from 'semantic-ui-react';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: [],
      foursquareId: null,
    };
  }

  componentDidMount() {
    const foursquareId = this.props.location.state.venue.foursquareId;
    const req = {
      params: {
        foursquareId: foursquareId,
      },
    };
    axios
      .get(`${process.env.HOST}/api/restaurants/page`, req)
      .then(res => {
        console.log('%c <Restaurant /> /api/restaurants/page INITIAL GET SUCCESS!!', 'color: green')
        this.setState({ foursquareId });
        this.setState({ menuState: res.data });
        console.log('this.state.menuState', this.state.menuState)
      })
      .catch(function(err) {
        console.log('%c <Restaurant /> /api/restaurants/page INITIAL GET FAIL!!', 'color: red')
        console.log(err);
      });
  }

  render() {
    const venue = this.props.location.state.venue;
    const imageUrl = JSON.parse(venue.imageUrl);
    const {prefix, suffix} = imageUrl;
    const address = JSON.parse(venue.address).join(', ');
    const img = `${prefix}800x400${suffix}`;

    if (!venue) {
      return <div>Sorry, but the restaurant was not found</div>;
    }

    return (
      <div className="ui container">
        <br />
        <br />
        <br />
        <br />
        <center>
        <Header style={{fontSize: '4em'}}>
          <Icon size="small" name="address card outline" />
          <Header.Content>RESTAURANT</Header.Content>
        </Header>

        </center>
  <br />
        <br />
        <Card fluid centered>
          <Image src={img} />

          <Card.Content>
            <h2 style={{fontSize: '3em'}}> {venue.name} </h2>
          </Card.Content>

          <Card.Content extra>
            <Icon name="map" />
            Address: {address}
          </Card.Content>

          <Card.Content extra>
            <Icon name="phone" />
            Phone: {venue.phone}
          </Card.Content>

          <Card.Content extra>
            <Icon name="world" />
            Website: {venue.website}
          </Card.Content>
          {/* restuarnt rating */}
          {/* <Card.Content extra>
            <Icon name="thumbs outline up" />
            Rating: {venue.avgRating}
          </Card.Content> */}
        </Card>

        <br/>
        <br/>
        <center>
        <Header style={{fontSize: '4em'}}>
          <Icon size="small" name="food" />
          <Header.Content>MENU</Header.Content>
        </Header>
        </center>
        <br/>
        <br/>

        <div className="ui container ">
          <div className="ui centered cards">
            <ul className="menulist">
              {this.state.menuState.map((r, i) => {
                return (
                  <li className="menuliststyle" key={i}>
                    <MenuCard menu={r} />
                  </li>
                );
              })}
            </ul>
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
