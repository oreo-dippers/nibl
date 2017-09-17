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

// when retrieving data from /api/dishes -> array of dish objects
  // add restaurant address to each dish?
  // add restaurant Name to each dish?

// when do we send user information?
  // on sign up to create a user in the database
  // send user id
  // send users photo
  // send .........................


// foursquareEntryId when do we get sent, when do we send
// foursquareId when do we get sent, when do we send

// when do we get the avgDishRating?
// when do we get the avgDishRating?
// when do we get the avgRestRating?

// get request to /api/dishes/review
  // √ given    -> ['userId', 'dishId', 'review', 'starRating', 'imageUrl']
  // √ *add*    -> a users rating of the dish
  // √ *add*    -> upvote rating for a single comment
  // √ *add*    -> users username
  // √ *add*    -> users image avatar (how to get user image for each user?)
// post request to /api/dishes/review
const getDishesReviewAPI = [
  {
    userData: "{username: 'Nicolas Cage', userImage: 'https://www.placecage.com/50/50',}",
    review: 'Dude, this tastes so good!',
    starRaring: 2,
    upvoteTotal: 0,
    createdAt: "",
    updatedAt: "",
    userId: "postgres key", // this is the firebase user id
    dishId: "",
    imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/14.jpg',
  },
  {
    username: 'Kevin Su',
    userImage: 'https://lh4.googleusercontent.com/-FL0yWop58rE/AAAAAAAAAAI/AAAAAAAALIA/HMGqR06X9Yw/photo.jpg',
    review: 'Dude, this tastes so good!',
    imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/18.jpg',
  },
  {
    username: 'Lisa Gee',
    userImage: 'https://www.placecage.com/50/50',
    review: 'Dude, this tastes so good!',
    imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/5.jpg',
  },
  {
    username: 'David Kang',
    userImage: 'https://www.placecage.com/50/50',
    review: 'Dude, this tastes so good!',
    imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/9.jpg',
  },

]


class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadProgress: null,
      file: null,
      imagePreviewUrl: null,
      comments: [],
    };
    // this.userRef = database.ref('users');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.aviarySubmit = this.aviarySubmit.bind(this);
    this.submitFilteredPhoto = this.submitFilteredPhoto.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({comments})
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    const comment = {
      username: 'Anon',
      userImage: 'https://www.placecage.com/50/50',
      review: this._comment.value,
      imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/9.jpg',
    }
    const newComment = [comment, ...this.state.comments]
    this.setState({comments: newComment})
    console.log('comment', comment);
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
            <img
              id="image1"
              src={this.state.imagePreviewUrl}
              ref={input => (this.filtered = input)}
            />
            <div>
              <input
                  id="something"
                  type="file"
                  name="myImage"
                  accept=".png, .jpg"
                  placeholder="Select An Image"
                  className="inputClass"
                  onChange={this.handleSubmit}
              />
              <Button
                primary
                type="image"
                src="http://images.aviary.com/images/edit-photo.png"
                value="Edit photo"
                onClick={this.aviarySubmit}
              >
                {' '} Filter {' '}
              </Button>
            </div>

          </Grid.Column>
          <Grid.Column width={9}>
            <Rating maxRating={5} clearable />
            <Form
              onSubmit={this.handleCommentSubmit}
              reply>
              <input
                ref={(i)=> this._comment = i}
                placeholder="leave a comment..."
              />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Grid.Column>
        </Grid>
        {console.log('this.state', this.state)}
        {
          this.state.comments.map((comment, i) => {
            return (
              <CommentBox data={comment} key={i}/>
            )
          })
        }
        <br />
      </div>
    );
  }
}

export default CommentCard;
