import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { auth, googleAuthProvider } from './firebase';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'home',
      currentUser: null,
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount(){
    auth.onAuthStateChanged((currentUser) =>{
      console.log('AUTH_CHANGE', currentUser)
      this.setState({currentUser});
    })
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem, currentUser } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Link to='/restaurants'>
            <Menu.Item name='kitchen' active={activeItem === 'kitchen'} onClick={this.handleItemClick} />
          </Link>
          <Link to='/dishes'>
            <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick} />
          </Link>

          {!currentUser &&
            <Menu.Menu position='right'>
              <Menu.Item name='login' active={activeItem === 'login'} onClick={() => auth.signInWithPopup(googleAuthProvider)} />
            </Menu.Menu>
          }
          {currentUser &&
            <Menu.Menu position='right'>
              <Menu.Item name='logout' active={activeItem === 'logout'} onClick={() => auth.signOut()} />
            </Menu.Menu>
          }
        </Menu>

        {/* <Segment>
          <img src='/assets/images/wireframe/media-paragraph.png' />
        </Segment> */}
      </div>
    )
  }
}
