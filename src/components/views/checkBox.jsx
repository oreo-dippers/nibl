import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'dish',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, { value }) {
    this.setState({ value })
    console.log('change change')
  }

  render() {
    return (
      <Form>

        <Form.Field>
          <Checkbox
            radio
            label='search by dish'
            name='checkbox'
            value='dish'
            checked={this.state.value === 'dish'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='search by restaurant'
            name='checkbox'
            value='restaurant'
            checked={this.state.value === 'restaurant'}
            onChange={this.handleChange}
          />
        </Form.Field>
        Selected: <b>{this.state.value}</b>
      </Form>
    )
  }
}
