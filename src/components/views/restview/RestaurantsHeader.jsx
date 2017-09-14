import React, { Component , Button} from 'react';
var Rating = require('react-rating');

class RestaurantsHeader extends Component {
	render() {
		return (
			<div className="ui container">
				<center>
					<div className="ui huge header" style={{ 'font-size': '5em' }}>
						RESTAURANT
					</div>
				</center>
				<div className="ui container">
					<div className="ui card fluid">
						<div className="ui slide masked reveal image">
							<img src="https://placekitten.com/900/400" className="visible content" />
							<img src="http://www.fillmurray.com/900/400" className="hidden content" />
						</div>
					</div>
				</div>

				<h2 style={{ 'font-size': '3em' }}> Taco Taqueria (いらっしゃいませ) </h2>

				<Rating
					placeholderRate={3.5}
					full={<img src="https://thumb.ibb.co/fgib4F/star_full.png" className="icon" alt="" />}
					placeholder={<img src="https://thumb.ibb.co/fgib4F/star_full.png" className="icon" alt="" />}
					empty={<img src="https://thumb.ibb.co/ijDnBv/star_empty.png" className="icon" alt="" />}
				/>
				<div className="meta"> 300 reviews </div>
				<div className="ui huge header" style={{ 'font-size': '1em' }}>
					Address, Phone Number{' '}
				</div>
				<h3>
					{' '}
					Born in Japan, Jiron San has always dreamed of opening a resturaunt in the United States of America.
					So after saving up his lunch money for a year he decided to buy a plane ticket and fly to the
					greatest Nation in the world to spread his culture and taste in food with the locals. Being 10, he
					found it hard to sign up for the licenses necessary to open a resturaunt so he forged a license and
					wore a fake beard and eventually he grew into the beard and he no longer had to fake his identity .
					He is a man that is full of wisdom and experience. Like he always would say every morning
					“ありがとうございました”. We would always say back “You are an inspriation to us all” He would then say “
					あなたは日本語を話せません”. what a wise man.
				</h3>
				<center>
					<div className="ui huge header" style={{ 'font-size': '5em' }}>
						MENU
					</div>{' '}
				</center>
			</div>
		);
	}
}

export default RestaurantsHeader;
