import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
    console.log('hi from menucard')
    const {menu} = this.props;
    const dish = menu
    return (
      <div>
        {'this is menucard'}
        <Card>
          <Image
            src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12751127_511734799019156_1460279120_n.jpg"
            alt=""
          />

          <Card.Content>
            <Card.Header>
              <Link to={
                  {
                    pathname: `/dishes/${menu.name}`,
                    state: { dish }
                  }
                }>
                {menu.name}
              </Link>
            </Card.Header>

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
        </Card>
      </div>
    );
  }
}

export default MenuCard;
