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
  Rating,
} from 'semantic-ui-react';


// {
//   userData: '{"user_photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","user_displayName":"Ankit","user_email":"ankit.kumar@gmail.com"}',
//   review: 'Dude, this tastes so good!',
//   starRating: 2,
//   upvoteTotal: 5555,
//   createdAt: new Date().toLocaleTimeString(),
//   updatedAt: "",
//   userId: "postgres key",
//   dishId: "",
//   imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/9.jpg',
// }


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // upvoteTotal: this.props.upvoteTotal,
      upvote: false,
    }
  }

  render() {
    const { userData, starRating, upvoteTotal, createdAt, imageUrl, review } = this.props.data;
    let upvotes = upvoteTotal;
    let user = typeof userData === 'string' ? JSON.parse(userData) : userData;

    const { user_photoURL, user_displayName  } = user
    return (
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={10}>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={user_photoURL} />
              <Comment.Content>
                <Comment.Author as="a">{user_displayName}</Comment.Author>
                <Rating
                  rating={starRating}
                  maxRating={5} disabled />
                <Comment.Metadata>
                  <div>{ createdAt }</div>
                </Comment.Metadata>

                <Comment.Text>{review}</Comment.Text>
                <Feed.Extra images>
                  <Modal
                    basic
                    size="mini"
                    trigger={
                      <a>
                        <img src={ imageUrl } />
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
                    <Feed.Like>
                      <Icon name="like" />
                      1 Like
                    </Feed.Like>
                  </Feed.Meta>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Grid.Column>
        <Grid.Column width={3}>
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
