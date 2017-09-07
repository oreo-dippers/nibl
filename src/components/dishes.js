import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react'

const ENV_MODE = 'dev'
const PROD = `https://us-central1-oreo-nibl.cloudfunctions.net/app`
const DEV = `http://localhost:5001/oreo-nibl/us-central1/app`

const HOST = ENV_MODE === 'dev' ? DEV : PROD;


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
      query: dishQuery
    }

    axios.post(`${HOST}/test`, data)
      .then((res)=> {
        console.log('successful post!')
        console.log('res.data', res.data);
      })
      .catch((err) => {
        console.log(err)
      })



    var request = {
      params: {
        query: dishQuery
      }
    }
    axios.get(`${HOST}/test`, request)
      .then((res)=> {
        console.log('successful get!');
        console.log('res', res);
      })
      .catch((err) => {
        console.log( err)
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
