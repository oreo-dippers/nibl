import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react'


const host = 'https://us-central1-oreo-nibl.cloudfunctions.net/app'
export default class Dishes extends Component {

  constructor() {
    super();
    this.state = {
      dishQuery: '',
    };
    this.submitDishQuery = this.submitDishQuery.bind(this);
  }

  submitDishQuery(e) {
    e.preventDefault();
    let dishQuery = this._dishes.value;
    
    this.setState({dishQuery});
    console.log('dishQuery', dishQuery)
    var data = {
      data: dishQuery
    }
    axios.post('/test.json', data)
      .then((res)=> {
        console.log('res from /dishes', res)
        console.log('res.data from /dishes', res.data)
      })
      .catch((err) => {
        console.log('err from /dishes', err)
      })

  }


  render() {
    return (
      <div>
      
        <Form onSubmit={this.submitDishQuery}>
          <Form.Field>
            <label>Find Dishes</label>
            <input 
              ref={(d)=>this._dishes = d}
            />
          </Form.Field>
        </Form>
        
        You Searched for {this.state.dishQuery}
      </div>
    )
  }
};
