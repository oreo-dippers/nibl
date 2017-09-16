import React, { Component } from 'react';
import {
	Button,
	Header,
	Image,
	Modal,
	Comment,
	Feed,
	Icon,
	Rating,
  } from 'semantic-ui-react';

class MenuCard extends Component {
	render() {
		const { menu } = this.props;
		console.log(menu);
		return (

				<div className="ui card">

					<div className="content">
						<div className="right floated meta">14h</div>
						<img className="ui avatar image" src="https://www.fillmurray.com/100/100" alt=""/> Bill Murray
					</div>
					<div className="image">
						<img src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/12751127_511734799019156_1460279120_n.jpg" alt=""/>
					</div>

					<div className="content">
						<a className=" right floated meta ui label" placeholder="N/A">${menu.price}</a>

						<div  style={{ color: '#000000' }} >{menu.name}</div>
						<Rating defaultRating={3} maxRating={5} disabled />
					</div>

					<div className="extra content">
						<div className="ui large transparent left icon input">
							<div className="meta" placeholder="N/A"> Description: {menu.description} </div>
						</div>
					</div>
                </div>
		);
	}
}

export default MenuCard;
