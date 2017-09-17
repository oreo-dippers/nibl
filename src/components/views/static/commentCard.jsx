import React, {Component} from 'react';
import FileInput from 'react-file-input';
import firebase, {storage, database} from '../../firebase';
import CommentBox from './commentBox';
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
import launchEditor from './aviary';

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadProgress: null,
      file: null,
      imagePreviewUrl: null,
    };
    // this.userRef = database.ref('users');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.aviarySubmit = this.aviarySubmit.bind(this);
    this.submitFilteredPhoto = this.submitFilteredPhoto.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // This function handles the image and sends it to firebase
    let file = e.target.files[0]; // This is a blob
    this.setState({file});
    const storageRef = firebase.storage().ref('new_folder/' + file.name); // replace with user UID as folder name / photos
    storageRef.put(file).then(() => {
      console.log('Image was Uploaded to Firebase!');
    });

    storageRef.getDownloadURL().then(imagePreviewUrl => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        const blob = xhr.response;
      };

      console.log(imagePreviewUrl); // send url to database for storage
      this.setState({imagePreviewUrl});
      // document.getElementById('incredibleimg').innerHTML =
      //   '<img id="rcorners1" src=' + url + '/>';
    });
  }

  aviarySubmit(e) {
    return launchEditor('image1', this.state.imagePreviewUrl);
  }

  submitFilteredPhoto() {
    let imagePreviewUrl = this.filtered;
    this.setState({imagePreviewUrl});
  }

  render() {
    let {imagePreviewUrl} = this.state;
    console.log('imagePreviewUrl', imagePreviewUrl);
    return (
      <div className="ui container">
        <div className="ui centered huge header" style={{fontSize: '5em'}}>
          comments
        </div>

        <Grid>
          <Grid.Column width={2} >

            </Grid.Column>
          <Grid.Column width={2}>

            <div id="injection_site" />
            <input
                id="something"
                type="file"
                name="myImage"
                accept=".png, .jpg"
                placeholder="Select An Image"
                className="inputClass"
                onChange={this.handleSubmit}
              />
            <img
              id="image1"
              src={this.state.imagePreviewUrl}
              ref={input => (this.filtered = input)}
            />

            <p>
              <Button
                primary
                type="image"
                src="http://images.aviary.com/images/edit-photo.png"
                value="Edit photo"
                onClick={this.aviarySubmit}
              >
                {' '}
                Edit{' '}
              </Button>
            </p>
          </Grid.Column>
          <Grid.Column width={9}>
            <Rating maxRating={5} clearable />
            <Form reply>
              <Form.TextArea />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column width={2} />
          <Grid.Column width={10}>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src="https://www.placecage.com/50/50" />
                <Comment.Content>
                  <Comment.Author as="a">Nicolas Cage</Comment.Author>
                  <Comment.Metadata>
                    <div>5 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>Dude, this tastes so good!</Comment.Text>
                  <Feed.Extra images>
                    <Modal
                      basic
                      size="mini"
                      trigger={
                        <a>
                          <img src="https://www.placecage.com/50/50" />
                        </a>
                      }
                    >
                      <center>
                        <Image
                          wrapped
                          size="medium"
                          src="https://www.placecage.com/300/300"
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

        <br />
      </div>
    );
  }
}

export default CommentCard;
