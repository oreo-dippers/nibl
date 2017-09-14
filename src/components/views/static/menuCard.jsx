import React, { Component } from 'react';
import Rating from 'react-rating';

class MenuCard extends Component {
	render() {
		return (

				<div className="ui card">

					<div className="content">
						<div className="right floated meta">14h</div>
						<img className="ui avatar image" src="https://www.fillmurray.com/100/100" /> Bill Murray
					</div>
					<div className="image">
						<img src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12751127_511734799019156_1460279120_n.jpg" />
					</div>

					<div className="content">
						<a className=" right floated meta ui label">$10.00</a>

						<div>Black Garlic Tokatsu Ramen</div>
						<Rating
							placeholderRate={4.5}
							full={
								<img
									src="https://thumb.ibb.co/csPWoa/star_yellow.png"
									alt="star_yellow"
									alt="star_grey"
									className="icon"
									alt=""
								/>
							}
							placeholder={
								<img
									src="https://thumb.ibb.co/csPWoa/star_yellow.png"
									alt="star_yellow"
									alt="star_grey"
									className="icon"
									alt=""
								/>
							}
							empty={
								<img
									src="https://thumb.ibb.co/d6MUPF/star_grey.png"
									alt="star_grey"
									className="icon"
									alt=""
								/>
							}
						/>
					</div>

					<div className="extra content">
						<div className="ui large transparent left icon input">
							<div className="meta"> "A warm big japanese hug in a bow..." </div>
						</div>
					</div>
                </div>
		);
	}
}

export default MenuCard;
