import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    this.props.setNavState(value);
  }

  render() {
    return (
      <Form>
      <Form.Field>
          <Checkbox
            radio
            label='Restaurants'
            name='checkbox'
            value='restaurants'
            checked={this.props.searchBy === 'restaurants'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Dishes'
            name='checkbox'
            value='dishes'
            checked={this.props.searchBy === 'dishes'}
            onChange={this.handleChange}
          />
        </Form.Field>
      
        {/* Selected: <b>{this.props.searchBy}</b> */}
      </Form>
    )
  }
}
