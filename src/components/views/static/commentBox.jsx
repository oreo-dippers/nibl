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

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { data } = this.props
    return (
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={10}>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={data.userImage} />
              <Comment.Content>
                <Comment.Author as="a">{data.username}</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>{data.review}</Comment.Text>
                <Feed.Extra images>
                  <Modal
                    basic
                    size="mini"
                    trigger={
                      <a>
                        <img src={data.imageUrl} />
                      </a>
                    }
                  >
                    <center>
                      <Image
                        wrapped
                        size="medium"
                        src={data.imageUrl}
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
          <Button icon>
            <Icon name="chevron up" />
          </Button>
          <div> 23k </div>
        </Grid.Column>
      </Grid>
    )
  }


}
export default CommentBox;
