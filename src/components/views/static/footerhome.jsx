import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Card,
  Rating
} from 'semantic-ui-react';



class Footer extends Component {
  
  render() {
    return (
      <div>
      <footer style={{background: '#66DFB7'}}>
        <br /> <br /> <br /> <br /> 
        <div>
          <center>
            <i className="inverted large twitter icon" />
            <i className="inverted large facebook icon" />{' '}
            <i className="inverted large github alternate icon" />{' '}
            <i className="inverted large linkedin icon" />{' '}
          </center>
        </div>
        <br />
        <div style={{color: '#FFFFFF'}}>
          <center> © 2017 Nibl. All Rights Reserved</center>
        </div>
        <br />
      </footer>
      </div>
    );
  }
}

export default Footer;
