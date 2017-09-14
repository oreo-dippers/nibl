import React, {Component} from 'react';

class FoodCard extends Component {
  render() {
    return (
      <div className="ui  container">
        <div className="ui equal width aligned padded grid">
          <div className="row">
            <div className="column">
              <img
                id="murray"
                src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.131.1080.1080/20214594_1390905300958312_8218964827691810816_n.jpg"
                alt=""
              />
            </div>
            <div className="column">
              <div id="murraytwin">
                <div className="card">
                  <div className="content">
                    <img
                      className="right floated mini ui image"
                      src="/images/avatar/large/elliot.jpg"
                      alt="avatar"
                    />

                    <div
                      className="ui  huge header"
                      style={{'font-size': '4em'}}
                    >
                      Chicken Carnitas
                    </div>
                    <div
                      className="ui  huge header"
                      style={{'font-size': '2em'}}
                    >
                      @ Pollo Hermanas
                    </div>

                    <p> -- </p>
                    <div className="">
                      originaltopramenWe love adding veggies to our Nissin Top
                      Ramen. Chopped, whole, or cooked, top your ramen with
                      mushrooms for extra flavor! #topramen #nissintopramen
                      #ramen #mushrooms #veggies #vegetables #noodles #nissin
                    </div>
                  </div>
                  <div className="ui horizontal divider">Comments</div>
                  <div className="extra content">
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
                  </div>
                  <div className="ui divider" />
                  <div className="extra content">
            

                    <div className="extra content">
                      <div className="ui equal width center aligned padded grid">
                        <div className="row">
                          <div className="column">
                            <div className="ui labeled button" >
                              <div className="ui button">
                                <i className="comment icon" /> Comments
                              </div>
                              <a className="ui basic label">2,048</a>
                            </div>
                          </div>

                          <div className="column">
                            <div className="ui labeled button" >
                              <div className="ui button">
                                <i className="heart icon" /> Likes
                              </div>
                              <a className="ui basic label">300</a>
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
      </div>
    );
  }
}

export default FoodCard;
