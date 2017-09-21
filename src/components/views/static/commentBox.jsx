import React, { Component } from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Segment,
  Form,
  Icon,
  Grid,
  Rating
} from 'semantic-ui-react';

import moment from 'moment';
class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvote: false,
    }
  }

  render() {
    const { userData, starRating, upvoteTotal, createdAt, imageUrl, review } = this.props.data;
    let upvotes = upvoteTotal;
    let user = typeof userData === 'string' ? JSON.parse(userData) : userData;

    const { user_photoURL, user_displayName  } = user;
    return (
      <Grid>
        <Grid.Column width={1} />
        <Grid.Column width={13}>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={user_photoURL} />
              <Comment.Content>
                <Comment.Author as="a">{user_displayName}</Comment.Author>
                <Rating
                  rating={starRating}
                  maxRating={5} disabled />
                <Comment.Metadata>
                  <div>{ moment(createdAt).fromNow() }</div>
                </Comment.Metadata>

                <Comment.Text>{review}</Comment.Text>
                <Feed.Extra images>
                  <Modal
                    basic
                    size="mini"
                    trigger={
                      <a>
                        <img  id="thecommentphoto" src={ imageUrl } />
                      </a>
                    }
                  >
                    <center>
                      <Image
                        wrapped
                       
                        size="medium"
                        src={imageUrl}
                      />
                    </center>
                  </Modal>
                </Feed.Extra>
                <Comment.Actions>
                  <Feed.Meta>
                    {/* <Feed.Like>
                      <Icon name="like" />
                      1 Like
                    </Feed.Like> */}
                  </Feed.Meta>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Grid.Column>
        <Grid.Column width={1}>
          <Button
            onClick={()=>this.setState({upvote: !this.state.upvote})}
            icon
            active={!this.state.upvote}
            className={!this.state.upvote ? "null" : "grey"}
            >
            <Icon name="chevron up" />
          </Button>
          <div>
            {
              !this.state.upvote
                ? <div style={{color:''}}>{upvotes}</div>
                : <div style={{color:''}}>{upvotes + 1}</div>
            }
          </div>
        </Grid.Column>
      </Grid>
  
    
    )
  }


}
export default CommentBox;
