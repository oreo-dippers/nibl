import React, {Component} from 'react';
import FileInput from 'react-file-input';
import firebase, { storage, database } from '../../firebase';
import CommentBox from './commentBox';


class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadProgress: null,
    };
    // this.userRef = database.ref('users');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // This function handles the image and sends it to firebase
    const file = event.target.files[0]; // This is a blob
    console.log(file);
    const storageRef = firebase.storage().ref('new_folder/' + file.name); // replace with user UID as folder name / photos
    storageRef.put(file).then(() => {
      console.log('Image was Uploaded to Firebase!');
    });

    storageRef.getDownloadURL().then(function(url) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        const blob = xhr.response;
      };
      console.log(url); // send url to database for storage
      document.getElementById('incredibleimg').innerHTML =
        '<img id="thumbnail" src=' + url + '/>';
        //   '<img id="rcorners1" src=' + url + '/>';
    });
  }

  render() {
    return (
      <div className="ui container">
	      <CommentBox >This is a Test From Dishes Component </CommentBox>
        <div id="incredibleimg" />
        <form>
          <input
            id="something"
            type="file"
            name="myImage"
            accept=".png, .jpg"
            placeholder=""
            className="inputClass"
            onChange={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}
export default CommentCard;
