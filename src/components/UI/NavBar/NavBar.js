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
					onClick={(event) => {this.handleItemClick(event, 'home')}}
				>
					Home
				</Menu.Item>

				<Menu.Item name='about-us' active={this.props.activeItem === 'about-us'} onClick={(event) => {this.handleItemClick(event, 'about-us')}}>
					About Us
				</Menu.Item>

				<Menu.Item
					name='login'
					active={this.props.activeItem === 'login'}
					onClick={(event) => {this.handleItemClick(event, 'login')}}
				>
					Login
				</Menu.Item>
			</Menu>
		);
	}
}

export default NavBar;