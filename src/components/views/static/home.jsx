import React from 'react';
import MenuCard from '../restaurants/menuCard';
import {Button,Header, Image,Modal,Input,Comment,Feed,Icon,Card,Rating} from 'semantic-ui-react';


const Home = () => (
  <div>
    <Image fluid src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/new_folder%2Ftoppart%20copy.png?alt=media&token=7e8f6b38-da28-423c-b75c-5b9bfa4faa84"/>
    <br /> <br /><br /><br /> <br /><br />

    <center><h1>Featured Dishes</h1>
	<p> The most visited dishes in your area </p></center>
    <br /> <br /><br /><br />
    <Card.Group itemsPerRow={4}>
      <Card
        color="teal"
        image="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12783394_952125858198193_878253493_n.jpg"
      />
      <Card
        color="teal"
        image="https://i.pinimg.com/736x/c5/9b/35/c59b352ccce61abaa9229678d2d4c1b7--lobster-trap-lobster-shack.jpg"
      />
      <Card
        color="teal"
        image="https://i.pinimg.com/originals/c5/5a/47/c55a473b79760dc707ddf0b8d4bfde4e.jpg"
      />
      <Card
        color="teal"
        image="https://i.pinimg.com/originals/b3/5d/9d/b35d9d9ba3bb3f838ba42dcb100b66af.jpg"
      />
    </Card.Group>
    <br />
    <div className="Site">
      <br /><br /><br /><br /><br />
      <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/quote.png?alt=media&token=cc5d520e-e5b6-4803-bcb5-7634f9e05cbc" />
	 <br />  <br /> <br /> <br />
      <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/subscribe.png?alt=media&token=e6f86831-ae2d-4e0d-842c-452ace5392bb" />
      <div style={{background: '#ffac35'}}>
        <br />
        <br />
        <center>
          <Input action="Submit" placeholder="Email Here..." />
        </center>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <center>
        <h1>Around You</h1>
		<p> See what's being liked recently </p>
      </center>
      <br />
      <br />
      <br />
      <Card.Group itemsPerRow={6}>
        <Card color="teal" image="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12783394_952125858198193_878253493_n.jpg"/>
        <Card color="teal" image="https://i.pinimg.com/736x/c5/9b/35/c59b352ccce61abaa9229678d2d4c1b7--lobster-trap-lobster-shack.jpg"/>
        <Card color="teal" image="https://i.pinimg.com/originals/c5/5a/47/c55a473b79760dc707ddf0b8d4bfde4e.jpg"/>
        <Card color="teal" image="https://i.pinimg.com/736x/e0/65/3e/e0653e717609267d5b0a36c8abd786f6--healthy-snacks-sunn-mat.jpg"/>
        <Card color="teal" image="https://i.pinimg.com/736x/91/7f/2f/917f2fc673aa3e95098e650ab3a7db59--eat-healthy-healthy-snacks.jpg" />
        <Card color="teal" image="https://i.pinimg.com/originals/b3/5d/9d/b35d9d9ba3bb3f838ba42dcb100b66af.jpg"/>
      </Card.Group>
      <br />
      <br />
      <br /> 
	  <br />
      <br />
      <br />
      <div style={{background: '#66DFB7'}}>
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1 style={{color: '#FFFFFF'}}>About Us</h1>
          <p style={{color: '#FFFFFF'}}>
            We are the group of engineers that created Nibl.
          </p>
        </center>
        <br />
        <br />
        <br />
        <div className="ui container">
          <Card.Group itemsPerRow={4} style={{background: '#66DFB7'}}>
            <Card>
              <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/new_folder%2Fkevin.png?alt=media&token=68ffddbd-a27b-4b19-b2b3-40f22f126f59" />
              <Card.Content>
                <Card.Header>Kevin Su</Card.Header>
                <Card.Meta>Software Developer</Card.Meta>
                <Card.Description>...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="github" />
                  <a href="https://github.com/imkevinsu">
                    Kevin's Github Profile
                  </a>
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/Screen%20Shot%202017-09-19%20at%207.49.28%20PM.png?alt=media&token=721faf40-c5f7-4113-9c60-58b37f22daaa" />
              <Card.Content>
                <Card.Header>David Kang</Card.Header>
                <Card.Meta>Software Developer</Card.Meta>
                <Card.Description>...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="github" />
                  <a href="https://github.com/d-kang">David's Github Profile</a>
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/lisa.jpg?alt=media&token=a90f1be5-8924-4da1-827c-5a7062ce56c8" />
              <Card.Content>
                <Card.Header>Lisa Gee</Card.Header>
                <Card.Meta>Scrum Master</Card.Meta>
                <Card.Description>...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="github" />
                  <a href="https://github.com/Zhusufeng">
                    Lisa's Github Profile
                  </a>
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/Screen%20Shot%202017-09-19%20at%207.49.03%20PM.png?alt=media&token=42f64234-157f-4b20-9c05-6e514aae031b" />
              <Card.Content>
                <Card.Header>Ankit Kumar</Card.Header>
                <Card.Meta>Product Owner</Card.Meta>
                <Card.Description>...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="github" />
                  <a href="https://github.com/Ankit09osr">
                    Ankit's Github Profile
                  </a>
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/BANNNNER.jpg?alt=media&token=66f253b0-1ffa-4611-b9e8-e92d21ab8c29" />
      <Image src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/banner3.jpg?alt=media&token=fbd3ed50-e3aa-48bd-ba74-cf36f8887ad8" />
      <footer style={{background: '#66DFB7'}}>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
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
  </div>
);

export default Home;
