import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react'

class NavBar extends Component {
	state = {}

	render() {
		return (
			<Menu>
				<Menu.Item
					name='home'
					active={this.props.activeItem === 'home'}
					onClick={this.handleItemClick}
				>
					Home
				</Menu.Item>

				<Menu.Item name='about-us' active={this.props.activeItem === 'about-us'} onClick={this.props.handleItemClick}>
					About Us
				</Menu.Item>

				<Menu.Item
					name='login'
					active={this.props.activeItem === 'login'}
					onClick={this.props.handleItemClick}
				>
					Login
				</Menu.Item>
			</Menu>
		);
	}
}

export default NavBar;