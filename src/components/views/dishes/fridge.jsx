import React, {Component} from 'react';
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

class Fridge extends Component {
  render() {
    return (
      <div className="ui container ">
        <br />
        <br />
        <center>
          <Header style={{fontSize: '4em'}}>
            <Icon size="small" name="empty heart" />
            <Header.Content>SAVED DISHES</Header.Content>
          </Header>
        </center>
        <br />
        <br />
        <Card.Group itemsPerRow={4}>
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
          <Card color="red" image="https://www.placecage.com/g/300/300" />
        </Card.Group>
      </div>
    );
  }
}

export default Fridge;
