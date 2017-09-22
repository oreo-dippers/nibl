import React, { Component } from 'react';
import axios from 'axios';
import firebase, { storage, database } from '../../firebase';
import FileInput from 'react-file-input';
import launchEditor from './aviary';
import CommentBox from './commentBox';
import Footer from './footerhome';
import { Button,
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

const stockPhoto = 'https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/placeholder.png?alt=media&token=dacfc0b5-aad9-4862-89f8-234db596e02d'

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadProgress: null,
      file: null,
      imagePreviewUrl: stockPhoto,
      rating: 0,
      maxRating: 5,
      foursquareEntryId: props.location.state.foursquareEntryId,
      UserData: localStorage.getItem('UserData'),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.aviarySubmit = this.aviarySubmit.bind(this);
    this.submitFilteredPhoto = this.submitFilteredPhoto.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleRate = this.handleRate.bind(this);
  }

  handleRate(e, { rating, maxRating }) {
    this.setState({ rating, maxRating })
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    const pathToState = this.props.location.state
    const foursquareEntryId = pathToState && pathToState.dish && pathToState.dish.foursquareEntryId;
    const UserId = localStorage.getItem('UserId');
    const comment = {
      userData: this.state.UserData,
      firebaseId: UserId,
      review: this._comment.value,
      starRating: this.state.rating,
      foursquareEntryId,
      imageUrl: this.filtered.src,
    };
    axios.post(`${process.env.HOST}/api/dishes/review`, comment)
    .then(res => {
      console.log('%c api/dishes/review POST SUCCESS!!', 'color: green')
      console.log('<CommentCard /> res.data', res.data);
      axios.get(`${process.env.HOST}/api/dishes/review`, {params: {foursquareEntryId}})
        .then(res => {
          console.log('%c <CommentCard /> api/dishes/review *post-> GET* SUCCESS!!', 'color: green')
          console.log('<CommentCard /> res.data', res.data)
          console.log('this', this);

          if(Array.isArray(res.data)) {
            this.props.setDishState({comments: res.data})
          }

        })
        .catch(err => {
          console.log('%c <CommentCard /> api/dishes/review *post-> GET* FAIL!!', 'color: red', err)
        })
    })
    .catch(err => {
      console.log('%c <CommentCard /> api/dishes/review POST FAIL!!', 'color: red', err)
    })

    const newComment = [comment, ...this.state.comments]
    this.setState({comments: newComment})
  }

  handleSubmit(e) {
    e.preventDefault();
    // This function handles the image and sends it to firebase
    let file = e.target.files[0];
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
      this.setState({ imagePreviewUrl });
    });
  }

  aviarySubmit() {
    return launchEditor('image1', this.state.imagePreviewUrl);
  }

  submitFilteredPhoto() {
    let imagePreviewUrl = this.filtered;
    this.setState({ imagePreviewUrl });
  }

  render() {
    let { imagePreviewUrl } = this.state;
    const { user_displayName } = JSON.parse(this.state.UserData);
    return (
     
      <div className="ui container">
     
        <Image src ="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/comments.png?alt=media&token=3fb83f44-47e1-4727-bc35-2010f7761b57"/>

        <Grid>
          <Grid.Column width={2} >

            </Grid.Column>
          <Grid.Column width={2}>
          <Grid verticalAlign="middle">

            <Grid.Row color="">
            <div id="injection_site" />
            <img
              id="image1"
              src={this.state.imagePreviewUrl}
              ref={input => (this.filtered = input)}
            />
            </Grid.Row>


            <Grid.Row color="">
              <Grid.Column color=" " width={5}>

            <input
              id="something"
              type="file"
              name="myImage"
              accept=".png, .jpg"
              placeholder="Select An Image"
              className="inputClass"
              onChange={this.handleSubmit}
          />


            </Grid.Column>

            <Grid.Column color=" " width={5}>

            <Button
            primary
            type="image"
            src="http://images.aviary.com/images/edit-photo.png"
            value="Edit photo"
            onClick={this.aviarySubmit}
          >
            {' '} Edit {' '}
          </Button>

              </Grid.Column>
            </Grid.Row>

        </Grid>

          </Grid.Column>
          <Grid.Column width={9}>
          <h3>{user_displayName}</h3>
            <Rating
              onRate={this.handleRate}
              maxRating={5}
              clearable
              defaultRating={0}
            />
            <Form
              onSubmit={this.handleCommentSubmit}
              reply>
              <input
                ref={(i)=> this._comment = i}
                placeholder="leave a comment..."
              />
              

              <Button
                content="Add Reply"
                icon="edit"
                primary
              />
            </Form>
          </Grid.Column>
        </Grid>
        {
          this.props.comments.map((comment, i) => {
            return (
            
              <CommentBox data={comment} key={i}/>
         
            )
          })
        }
       
      </div>
   
    );
  }
}

export default CommentCard;
