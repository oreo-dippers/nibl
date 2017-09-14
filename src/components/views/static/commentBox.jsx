import React, { Component } from 'react';
// import FileInput from 'react-file-input';
import firebase, { storage, database } from '../../firebase';
// import $ from 'jquery';
// var Rating = require('react-rating');

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      editing: null
    }
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }
	getInitialState() {
    console.log('getting initial state')
		return this.setState({editing: false});
	}
	edit(){
		this.setState({editing:true});
	}
	remove(){
		console.log('removed comment');
	}
	save(){
		var val = this.refs.newText.value;
		console.log('new comment: ' + val)
		this.setState({editing:false});
	}
	renderNormal(){
		return(
			<div>
				<div> {this.props.children}</div>
				<button onClick={this.edit}>Edit</button>
				<button onClick={this.remove} > Remove </button>
			</div>
		)
	}
	renderForm(){
		return(
			<div>
				<textarea ref="newText" defaultValue={this.props.children} placeholder="Yum!" />
				<button onClick={this.save} >Save</button>
			</div>
		)
	}
	render() {
		return (
			<div className="ui container">
			  <div> {this.props.children} </div>
				<button onClick={this.edit}>Edit</button>
				<button onClick={this.remove}> Remove </button>
			</div>
		);
	}
}
export default CommentBox;
