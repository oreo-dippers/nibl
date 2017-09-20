import React, {Component} from 'react';
import FileInput from 'react-file-input';
import firebase, {storage, database} from '../../firebase';
import CommentBox from './commentBox';
import {Button,Header,Image,Modal,Comment,Feed,Segment,Form,Icon,Grid,Rating,} from 'semantic-ui-react';
import launchEditor from './aviary';
import axios from 'axios';



// avgRating -> avgDishRating -> avgRestRating

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


// get request to /api/dishes/review
  // √ given    -> ['userId', 'dishId', 'review', 'starRating', 'imageUrl']
  // √ *add*    -> a users rating of the dish
  // √ *add*    -> upvote rating for a single comment
  // √ *add*    -> users username
  // √ *add*    -> users image avatar (how to get user image for each user?)
// post request to /api/dishes/review

// foursquareEntryID is a dish unique id
// foursquareId is a restaurants unique id


// {
//   user_photoURL: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
//   user_displayName: "David Kang",
//   user_email: "david.kang714@gmail.com"
// }

// {obj: "{"user_photoURL":"https://lh3.googleusercontent.co…vid Kang","user_email":"david.kang714@gmail.com"}"}

// const userObj = {
//   params:{
//     userId: currentUser.uid,
//     userData: JSON.stringify(theuserdata),
//   }
// }

// const actual = [
//   {
//     "id": 2,
//     "review": "hello",
//     "starRating": 0,
//     "imageUrl": "",
//     "upvoteTotal": 0,
//     "createdAt": "2017-09-19T20:17:14.895Z",
//     "updatedAt": "2017-09-19T20:17:14.895Z",
//     "userId": 1,
//     "dishId": 108,
//     "userData": {
//       "user_displayName": "David Kang",
//       "user_photoURL": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
//       "user_email": "david.kang714@gmail.com"
//     }
//   },
//   {
//     id: 0,
//     review: 'Dude Dude Dude Dude, this tastes so good!',
//     starRating: 5,
//     imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/14.jpg',
//     upvoteTotal: 9999,
//     createdAt: new Date().toLocaleTimeString(),
//     updatedAt: "",
//     userId: "postgres key",
//     dishId: "",
//     userData: '{"user_photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","user_displayName":"David Kang","user_email":"david.kang714@gmail.com"}'
//   }
// ]


// const getDishesReviewAPI = [
//   {
//     "id": 2,
//     "review": "hello",
//     "starRating": 0,
//     "imageUrl": "",
//     "upvoteTotal": 0,
//     "createdAt": "2017-09-19T20:17:14.895Z",
//     "updatedAt": "2017-09-19T20:17:14.895Z",
//     "userId": 1,
//     "dishId": 108,
//     "userData": {
//       "user_displayName": "David Kang",
//       "user_photoURL": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
//       "user_email": "david.kang714@gmail.com"
//     }
//   },
//   {
//     userData: '{"user_photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","user_displayName":"David Kang","user_email":"david.kang714@gmail.com"}',
//     review: 'Dude Dude Dude Dude, this tastes so good!',
//     starRating: 5,
//     upvoteTotal: 9999,
//     createdAt: new Date().toLocaleTimeString(),
//     updatedAt: "",
//     userId: "postgres key",
//     dishId: "",
//     imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/14.jpg',
//   },
//   {
//     userData: '{"user_photoURL":"https://lh4.googleusercontent.com/-FL0yWop58rE/AAAAAAAAAAI/AAAAAAAALIA/HMGqR06X9Yw/photo.jpg","user_displayName":"Kevin Su","user_email":"kevin.su@gmail.com"}',
//     review: 'Dude Dude Dude, this tastes so good!',
//     starRating: 4,
//     upvoteTotal: 8888,
//     createdAt: new Date().toLocaleTimeString(),
//     updatedAt: "",
//     userId: "postgres key",
//     dishId: "",
//     imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/18.jpg',
//   },
//   {
//     userData: '{"user_photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","user_displayName":"Lisa Gee","user_email":"lisa.gee@gmail.com"}',
//     review: 'Dude Dude, this tastes so good!',
//     starRating: 3,
//     upvoteTotal: 7777,
//     createdAt: new Date().toLocaleTimeString(),
//     updatedAt: "",
//     userId: "postgres key",
//     dishId: "",
//     imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/5.jpg',
//   },
//   {
//     userData: '{"user_photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","user_displayName":"Ankit","user_email":"ankit.kumar@gmail.com"}',
//     review: 'Dude, this tastes so good!',
//     starRating: 2,
//     upvoteTotal: 5555,
//     createdAt: new Date().toLocaleTimeString(),
//     updatedAt: "",
//     userId: "postgres key",
//     dishId: "",
//     imageUrl: 'http://usa.stockfood.com/Sites/StockFood/Documents/Homepage/News/en/9.jpg',
//   }
// ]


class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadProgress: null,
      file: null,
      imagePreviewUrl: null,
      rating: 0,
      maxRating: 5,
      foursquareEntryId: props.location.state.foursquareEntryId,
    };
    // this.userRef = database.ref('users');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.aviarySubmit = this.aviarySubmit.bind(this);
    this.submitFilteredPhoto = this.submitFilteredPhoto.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleRate = this.handleRate.bind(this);
  }

  componentDidMount() {
    // console.log('bbbbb: ', this.props)
    // localStorage.setItem('UserData', userObj.userData)
    // console.log('ccccc: ', UserData);

    // this.setState({comments: getDishesReviewAPI})
    // axios.get(`${process.env.HOST}/api/dishes/review`, {params: {foursquareEntryId: this.state.foursquareEntryId}})
    //   .then(res => {
    //     console.log('%c api/dishes/review POST->>> GET SUCCESS!!', 'color: green')
    //     console.log('res.data', res.data)
    //   })
    //   .catch(err => {
    //     console.log('%c api/dishes/review POST->>> GET FAIL!!', 'color: red', err)
    //   })
  }

  handleRate(e, { rating, maxRating }) {
    this.setState({ rating, maxRating })
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    const pathToState = this.props.location.state
    const foursquareEntryId = pathToState && pathToState.dish && pathToState.dish.foursquareEntryId
    // let imagePreviewUrl = this.filtered.src
    // this.setState({imagePreviewUrl});

    // do we need to keep track of a person comments?
    const UserData = localStorage.getItem('UserData')
    const UserId = localStorage.getItem('UserId')
    const comment = {
      userData: UserData, // db doesnt need  but can send
      firebaseId: UserId,  // database needs this id
      review: this._comment.value,
      starRating: this.state.rating,
      upvoteTotal: 0, // defaults on database
      createdAt: new Date().toLocaleTimeString(), //generated by db X
      // updatedAt: "", X
      // userId: "postgres key", X
      foursquareEntryId, // foursquareEntryId NEEDED
      imageUrl: this.filtered.src,
    }
    // console.log('comment', JSON.stringify(comment, null, 2));
    axios.post(`${process.env.HOST}/api/dishes/review`, comment)
    .then(res => {
      console.log('%c api/dishes/review POST SUCCESS!!', 'color: green')
      console.log('<CommentCard /> res.data', res.data);
      axios.get(`${process.env.HOST}/api/dishes/review`, {params: {foursquareEntryId}})
        .then(res => {
          console.log('%c <CommentCard /> api/dishes/review *post-> GET* SUCCESS!!', 'color: green')
          console.log('<CommentCard /> res.data', res.data)
          console.log('this', this);
          this.props.setDishState({comments: res.data})
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
    let { imagePreviewUrl } = this.state;
    return (
      <div className="ui container">
        <div className="ui centered huge header" style={{fontSize: '5em'}}>
          comments
        </div>

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
          Name Here
            <Rating
              onRate={this.handleRate}
              maxRating={5}
              clearable
              defaultRating={0}
            />
            <Form
              onSubmit={this.handleCommentSubmit}
              reply>
              <Form.TextArea
                ref={(i)=> this._comment = i}
                placeholder="leave a comment..."
              />
              <br/>
           
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Grid.Column>
        </Grid>
        { console.log('<CommentCard /> this.props.comments', this.props) }
        { `<CommentCard /> this.props.comments -> ${this.props.comments}` }
        {
          this.props.comments.map((comment, i) => {
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
