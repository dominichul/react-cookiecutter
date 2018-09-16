import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react'

import classes from './NavBar.css';

class NavBar extends Component {
	state = {}

	render() {
		return (
			<Menu className={classes.NavBar}>
				<Menu.Item
					name='home'
					className={classes.NavBarLink}
					active={this.props.activeItem === 'home'}
					onClick={(event) => {
						this.handleItemClick(event, 'home')
					}}

				>
					Home
				</Menu.Item>

				<Menu.Item className={classes.NavBarLink} name='about-us' active={this.props.activeItem === 'about-us'} onClick={(event) => {
					this.handleItemClick(event, 'about-us')
				}}>
					About Us
				</Menu.Item>

				<Menu.Item
					name='login'
					active={this.props.activeItem === 'login'}
					onClick={(event) => {
						this.handleItemClick(event, 'login')
					}}
					className={classes.NavBarLink}
				>
					Login
				</Menu.Item>
			</Menu>
		);
	}
}

export default NavBar;