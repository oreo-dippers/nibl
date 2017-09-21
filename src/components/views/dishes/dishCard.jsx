import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button,Header,Image,Modal,Comment,Feed,Icon,Card,Rating } from 'semantic-ui-react';
import { dashify } from '../../../helpers';

class DishCard extends Component {
  render() {
    const {dish} = this.props;
    const {prefix, suffix} = dish.imageUrl;
    const img = `${prefix}800x200${suffix}`;
    console.log(this.props);
    if (!dish) {
      return <div>Sorry, but the Dish was not found</div>;
    }
    return (
      <div className="ui container ">
        <div className="ui equal width aligned padded grid">
          <div className="row">
            <div className="seven wide column" > 
              <img
                id="murray"
                src={dish.imageUrl}
                alt=""
              />
            </div>
            <div className="column">
              <div id="murraytwin">
                <div className="card">
                  <div className="content">
                    <div className="ui  huge header" style={{fontSize: '3em'}}>
                      <Link
                        to={{
                          pathname: `/dishes/${dashify(dish.name)}`,
                          state: {dish},
                        }}
                      >
                        {dish.name}
                      </Link>
                    </div>

{/*
                    <div className="ui  huge header" style={{fontSize: '2em'}}>

                      <Link
                        to={{
                          pathname: `/restaurants/${dish.name}`,
                          // state: {dish},
                        }}
                      >
                        @ GO TO RESTAURANT *ADD NAME*
                      </Link>

                      <p style={{color: 'black'}}>address: .......</p>

                      
                    </div> */}

                    <Rating defaultRating={3} maxRating={5} disabled />

                    <p style={{color: '#000000'}}> -- </p>
                    <div style={{color: '#000000'}}>
                      originaltopramenWe love adding veggies to our Nissin Top
                      Ramen. Chopped, whole, or cooked, top your ramen with
                      mushrooms for extra flavor! #topramen #nissintopramen
                      #ramen #mushrooms #veggies #vegetables #noodles #nissin
                    </div>
                  </div>
                  <div className="ui horizontal divider">Comments</div>
                  <div className="extra content" style={{color: '#000000'}}>
                    <b> Bill Murray </b>
                    Tastes better than cardboard an Tapatillo..
                    <br />
                    <b> Josefina Guiterrz </b>
                    I can not replicate these at home, they have some secret
                    sauce
                    <br />
                    <b> Jim Jones </b>
                    Deliciousss!!
                    <br />
                    <b> Karen Bullosky </b>
                    Whats better than a Chicken thats shredded
                    <br />
                    <b> Joe Shietsky </b>
                    i love taco bell
                    <br />
                    <b> ... </b>
                  </div>
                  <div className="ui divider" />
                  <div className="extra content">
                    <div className="extra content">
                      <div className="ui equal width center aligned padded grid">
                        <div className="row">
                          <div className="column">
                            <div className="ui labeled button">
                              <div className="ui button">
                                <i className="comment icon" /> Comments
                              </div>
                              <a className="ui basic label">2,048</a>
                            </div>
                          </div>

                          <div className="column">
                            <Button className="ui active button" color="red">
                              <Icon className="heart" />
                              Like
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DishCard;
