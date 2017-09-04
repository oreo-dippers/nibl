import React from "react";
import { Button, Container, Header, Icon } from 'semantic-ui-react'
const Home = props => (
  <div>
    <h1>Welcome to Nibl!</h1>

      <br/><br/>
      <div>
        <Button
     content='Like'
     icon='heart'
     label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
     labelPosition='left'
   />

   <Button
     icon='fork'
     label={{ as: 'a', basic: true, content: '2,048' }}
     labelPosition='left'
   />
      </div>


    <br/><br/>
    <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    <Button color='vk'>
      <Icon name='vk' /> VK
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>
    <p>{props.test}</p>
  </div>
);

export default Home;
