import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Image,
  Modal,
  Popup,
  Comment,
  Feed,
  Icon,
  Card,
  Rating
} from 'semantic-ui-react';
import { dashify } from '../../../helpers';

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.addToFridge = this.addToFridge.bind(this);
  }
  addToFridge() {
    console.log('this.props', this.props);
    // firebaseID
    // foursquarID
    const firebaseId = String(localStorage.getItem('UserId'));
    console.log('firebaseId', firebaseId);
    const reqBody = {
      firebaseId,
      foursquareEntryId: this.props.menu.foursquareEntryId
    }
    console.log('reqBody', reqBody);
    axios.post(`${process.env.HOST}/api/user/fridge`, reqBody)
      .then(req => console.log('post favorited! success', req.data))
      .catch(err => console.log('post favorited! fail', err))
  }

  render() {
    const {menu} = this.props;
    const dish = menu
    return (
      <div>
        <Card>
          <Image
            fluid
            label={{ as: 'a', corner: 'left', icon: 'heart' }}
            src={menu.imageUrl}
            alt=""
          />
          <button onClick={this.addToFridge}>Add to Fridge: </button>
          <Card.Content>
            <Card.Header>
              <Link to={
                  {
                    pathname: `/dishes/${dashify(menu.name)}`,
                    state: { dish }
                  }
                }>
                {menu.name}
              </Link>
            </Card.Header>

            <Rating defaultRating={menu.avgDishRating} maxRating={5} disabled />
            <Popup
              trigger={<Card.Description>{menu.description ? menu.description.slice(0, 30)+'...' : 'No description'} </Card.Description>}
              content={menu.description}
            />
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="dollar" />
              {menu.price}
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default MenuCard;
