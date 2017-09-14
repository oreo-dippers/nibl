import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Button color='facebook'>
          <Icon name='facebook'/>
          Facebook
        </Button>
        <Button color='twitter'>
          <Icon name='twitter'/>
          Twitter
        </Button>
        <Button color='instagram'>
          <Icon name='instagram'/>
          Instagram
        </Button>
        <Button
          content='Like'
          icon='heart'
          label={{
            as: 'a',
            basic: true,
            pointing: 'right',
            content: '2,048'
          }}
          labelPosition='left'
        />
        <Button
          icon='fork'
          label={{
            as: 'a',
            basic: true,
            content: '2,048'
          }}
          labelPosition='left'
        />
      </div>
    )
  }
}
export default Footer;
