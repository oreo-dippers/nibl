import React, { Component } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import { Button, Container, Header, Icon } from 'semantic-ui-react';


class CommentCard extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  uploadProgress: null
		};
	
		this.userRef = database.ref('users').child(props.uid);
		// this.storageRef = storage.ref('user-images').child(props.uid);
	
		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleFileRemoval = this.handleFileRemoval.bind(this);
	  }

	
	handleSubmit(event) {
		const file = event.target.files[0];
		console.log(file)
		// const uploadTask = this.storageRef.child(file.name)
		// 								  .put(file, { contentType: file.type });
	
		// uploadTask.on('state_changed', (snapshot) => {
		//   console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
		// });
	
		// uploadTask.then((snapshot)  => {
		//   this.userRef.child('photoURL').set(snapshot.downloadURL);
		// });
	  }

	  render() {
		// const { displayName, photoURL } = this.props.currentUser
		return (
		  <div>
		  <form>
			<FileInput
				name = "myImage"
				accept=".png, .jpg"
				placeholder = "Select An Image"
				className="inputClass"
			
				onChange={this.handleSubmit.bind(this)}
				/>
				</form>
		  </div>
		);
	  }
	}
export default CommentCard;
