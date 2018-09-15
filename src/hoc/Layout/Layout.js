import React, {Component} from 'react';

import NavBar from '../../components/UI/NavBar/NavBar';
import NavSideBar from "../../components/UI/NavSideBar/NavSideBar";
import classes from './Layout.css';

class Layout extends Component {

	state = {
		activeItem: null
	}

	navBarClickHandler = (event, activeItem) => {
		console.log(event, activeItem);
	}

	render() {
		return (
			<div className={classes.Layout}
			>
				<NavBar activeItem={this.state.activeItem} handleItemClick={this.navBarClickHandler} />
				<NavSideBar>
					{this.props.children}
				</NavSideBar>
			</div>
		);
	}
}

export default Layout;