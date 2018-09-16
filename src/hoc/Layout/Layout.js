import React, {Component} from 'react';

import NavBar from '../../components/UI/NavBar/NavBar';
import NavSideBar from "../../components/UI/NavSideBar/NavSideBar";
import classes from './Layout.css';
import {Container, Grid} from 'semantic-ui-react';

class Layout extends Component {

	state = {
		activeItem: null,
		WindowSize: window.innerHeight - 100
	}

	navBarClickHandler = (event, activeItem) => {
		console.log(event, activeItem);
	}

	render() {
		return (
			<div className={classes.Layout}
			>
					<NavBar activeItem={this.state.activeItem} handleItemClick={this.navBarClickHandler}/>
					<NavSideBar>
						{this.props.children}
					</NavSideBar>
					<Container fluid className={classes.Footer}></Container>
			</div>
		);
	}
}

export default Layout;