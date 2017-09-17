import React, {Component} from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Popup,
  Icon,
  Card,
  Rating,
} from 'semantic-ui-react';

class MenuCard extends Component {
  render() {
    const {menu} = this.props;
    console.log(menu);
    return (
      <div>
        <span style={{color:'black'}}>HI I AM A DISH MENUCARD</span>
        {/* <Card>

          <Image
            src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12751127_511734799019156_1460279120_n.jpg"
            alt=""
          />

          <Card.Content>
            <Card.Header>{menu.name}</Card.Header>
            <Rating defaultRating={3} maxRating={5} disabled />
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
        </Card> */}
      </div>
    );
  }
}

export default MenuCard;
