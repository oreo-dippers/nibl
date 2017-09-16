import React, { Component } from 'react';
import FileInput from 'react-file-input';
import firebase, { storage, database } from '../../firebase';
import CommentBox from './commentBox';


const Aviary = window.Aviary


var featherEditor = new Aviary.Feather({
      apiKey: '_',
      apiVersion: 3,
      theme: 'dark', // Check out our new 'light' and 'dark' themes!
      tools: 'all',
      appendTo: '',
      onSave: function(imageID, newURL) {
          var img = document.getElementById(imageID);
          img.src = newURL;
      },
      onError: function(errorObj) {
          alert(errorObj.message);
      }
  });
function launchEditor(id, src) {
    featherEditor.launch({
        image: id,
        url: src
    });
   return false;
}

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

  }

  render() {
    let { imagePreviewUrl } = this.state
    console.log('imagePreviewUrl', imagePreviewUrl);
    return (
      <div className="ui container">
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

      </div>
    );
  }
}

export default CommentCard;
