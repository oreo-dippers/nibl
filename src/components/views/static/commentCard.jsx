import React, { Component } from 'react';
import FileInput from 'react-file-input';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Rating,
} from 'semantic-ui-react';
import firebase, {storage, database} from '../../firebase';
import CommentBox from './commentBox';

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.userRef = database.ref('users');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.aviarySubmit = this.aviarySubmit.bind(this);
    this.submitFilteredPhoto = this.submitFilteredPhoto.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // This function handles the image and sends it to firebase
    let file = e.target.files[0]; // This is a blob
    this.setState({file})
    const storageRef = firebase.storage().ref('new_folder/'  + file.name); // replace with user UID as folder name / photos
    storageRef.put(file).then(() => {
      console.log('Image was Uploaded to Firebase!');
    });

    storageRef.getDownloadURL().then((imagePreviewUrl) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        const blob = xhr.response;
<<<<<<< HEAD
    };

    console.log(imagePreviewUrl); // send url to database for storage
      this.setState({imagePreviewUrl})
      // document.getElementById('incredibleimg').innerHTML =
      //   '<img id="rcorners1" src=' + url + '/>';
    })
  }

  aviarySubmit(e) {
    console.log('e', e);
    // e.target
    console.log('e.target', e.target.files);
    "return launchEditor('image1', 'http://images.aviary.com/imagesv5/feather_default.jpg');"


    console.log('featherEditor', featherEditor);
    return launchEditor('image1', this.state.imagePreviewUrl)
  }

  submitFilteredPhoto() {
    let imagePreviewUrl = this.filtered
    this.setState({ imagePreviewUrl });

=======
      };
      console.log(url); // send url to database for storage
      document.getElementById('incredibleimg').innerHTML =
        '<img  id="thumbnail" src=' + url + '/>';
    });
>>>>>>> popup for photos, commentcard input field
  }

  render() {
    let { imagePreviewUrl } = this.state
    console.log('imagePreviewUrl', imagePreviewUrl);
    return (
      <div className="ui container">
<<<<<<< HEAD
        <CommentBox >This is a Test From Dishes Component </CommentBox>

        <form>
          <input
            id="something"
            type="file"
            name="myImage"
            accept=".png, .jpg"
            placeholder="Select An Image"
            className="inputClass"
            onChange={this.handleSubmit}
          />
        </form>
        <div id='injection_site'></div>

          <img
            id='image1'
            src={this.state.imagePreviewUrl}
            ref={(input) => this.filtered = input}
          />


          <p>
            <input
              type='image'
              src='http://images.aviary.com/images/edit-photo.png'
              value='Edit photo'
              onClick={this.aviarySubmit}
            />
          </p>

          <button onClick={this.handleSubmit}>Submit photo</button>

=======
        {/* <CommentBox >This is a Test From Dishes Component </CommentBox>*/}

        <Feed>
          <Feed.Event>
            <Feed.Label image="https://www.placecage.com/50/50" />
            <Feed.Content>
              <Feed.Summary>
                <a>Helen Troy</a> added <a>2 new illustrations</a>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img src="https://www.placecage.com/50/50" />
                </a>

                <input
                  id="something"
                  type="file"
                  name="myImage"
                  accept=".png, .jpg"
                  placeholder=""
                  className="inputClass"
                  onChange={this.handleSubmit}
                />

                <Modal
                  basic
                  trigger={
                    <a>
                      {' '}
                      <div id="incredibleimg" />{' '}
                    </a>
                   
                  } closeIcon
                >
                  <Modal.Content>
                    <center>
                      <img src="https://www.placecage.com/500/500" />
                    </center>
                  </Modal.Content>
                </Modal>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />
                  1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
>>>>>>> popup for photos, commentcard input field
      </div>
    );
  }
}

export default CommentCard;
