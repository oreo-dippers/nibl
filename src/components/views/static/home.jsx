import React from 'react';
// import { Grid, Image, Segment } from 'semantic-ui-react';
import MenuCard from '../restaurants/menuCard';
// style={{ background: 'url(https://thumb.ibb.co/cdP7jF/backdropfoods.png)' }}
import {
	Button,
	Header,
	Image,
	Modal,
	Comment,
	Feed,
	Icon,
	Card,
	Rating,
  } from 'semantic-ui-react';
const Home = () => (
	<div >
	


	<Image fluid src="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/new_folder%2Ftoppart%20copy.png?alt=media&token=7e8f6b38-da28-423c-b75c-5b9bfa4faa84"/>

		
	<br /><br />
	<br /><br />
	<br />
	<br />
	<center><h1>Featured Dishes</h1></center>
	<br /><br />
	<br />
	<br />

	<Card.Group centered itemsPerRow={4}>
    	<Card color='teal' image="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12783394_952125858198193_878253493_n.jpg"/>
    	<Card color='teal' image="https://i.pinimg.com/736x/c5/9b/35/c59b352ccce61abaa9229678d2d4c1b7--lobster-trap-lobster-shack.jpg" />
   		 <Card color='teal' image="https://i.pinimg.com/originals/c5/5a/47/c55a473b79760dc707ddf0b8d4bfde4e.jpg" />
   		 <Card color='teal' image="https://i.pinimg.com/originals/b3/5d/9d/b35d9d9ba3bb3f838ba42dcb100b66af.jpg" />
	</Card.Group>
		
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
	
		<br />
		<div className="Site">
		<br/>
		<br/>
		<br/>
		<br/><br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<div style={{ background: '#242424' }}>
			<br />
			<br />
		</div>
		<div className="row">
			<div className="column padding-reset">
				<div style={{ background: '#242424' }} className="ui huge message page grid">
					<br />
					<h1 style={{ color: '#FFFFFF' }} className="ui huge header">
						Our Story.
					</h1>
					<br />

					<p style={{ color: '#FFFFFF' }} id="ourstory">
						“As a team of foodie developers we decided to make an app that revolved around the idea of food.
						Coming from different backgrounds and cultures we all look for different things when we are
						looking for something to remind us of our home town. By filtering the foods that resturaunts
						around you offer, we make it easier for you to make your choice. We hope that you enjoy it as
						much as we did making it.” - Nibl Team
					</p>
					<a>Learn More »</a>
					<br />
					<br />
				</div>
			</div>
		</div>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<footer style={{ background: '#66DFB7' }}>
		<div>.</div>
		<div>.</div>
		<div>.</div>
		<div>.</div>
		<div>.</div>
	
		
		<div>.</div>
		<div>.</div>
		
		<div>.</div>
		<div style={{ color: '#FFFFFF' }}><center> © 2017 Nibl. All Rights Reserved</center></div>
		<div>.</div>

	

		</footer>
		</div>
	</div>
);

export default Home;
