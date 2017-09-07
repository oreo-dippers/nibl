import React, { Component } from 'react'
import axios from 'axios'
import Header from './header';
import Main from './main';
import Footer from './footer';

import { Switch, Route } from 'react-router-dom'

import Home from './home'
import { Form, Button, Menu } from 'semantic-ui-react'

const DEV = `http://localhost:5001/oreo-nibl/us-central1/app`

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      restaurantQuery: '',
    }
    this.submitrestaurantQuery = this.submitrestaurantQuery.bind(this);
  }

  componentDidMount() {
    // var restaurants = VenuesByQueryAPI.response.groups[0].items
    // console.log('restaurants', restaurants);
    // this.setState({restaurants});
  }

  submitrestaurantQuery(e) {
    e.preventDefault();
    let restaurantQuery = this._restaurants.value;
    this.setState({restaurantQuery});
    console.log('restaurantQuery', restaurantQuery)


    // example post
    // const data = {
    //   query: restaurantQuery,
    //   near: 'Los Angeles, CA, United States',
    //   radius: '5000'
    // }
    // axios.post(`${DEV}/test`, data)
    //   .then((res)=> {
    //     console.log('successful post!')
    //     console.log('res.data', res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    var request = {
      params: {
        query: restaurantQuery,
        near: 'Los Angeles, CA, United States',
        radius: '5000'
      }
    }
    axios.get(`/api/restaurants`, request)
      .then((res)=> {
        console.log('successful get!');
        console.log('res', res.data);
        var restaurants = res.data.response.groups[0].items
        console.log('restaurants', restaurants);
        this.setState({restaurants});

      })
      .catch((err) => {
        console.log( err)
      })
  }

  render() {

    const { restaurants } = this.state;
    return (
      <div>
        <Header />
        <br/><br/>
        <div className="formFieldComponent">
          <Form
            onSubmit={this.submitrestaurantQuery}
            placeholder="search here">
            <Form.Field widths="equal">
              <input
                ref={(d)=>this._restaurants = d}
              />
            <Button>Submit</Button>
            </Form.Field>
          </Form>
          You Searched for {this.state.restaurantQuery}
        </div>


        <Main restaurants={restaurants}/>
        <Footer />
      </div>
    )
  }
}


export default App
