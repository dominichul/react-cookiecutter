import React, {Component} from 'react';

import NavBar from '../../components/UI/NavBar/NavBar';
import NavSideBar from "../../components/UI/NavSideBar/NavSideBar";
import classes from './View.css';
import {Container} from 'semantic-ui-react';
import LoginPage from '../../components/Forms/Login/Login';
import {Switch, Redirect , Route} from 'react-router-dom';

class View extends Component {

	state = {
		activeItem: null,
		WindowSize: window.innerHeight - 100,
		authenticated: false
	}

	navBarClickHandler = (event, activeItem) => {
		console.log(event, activeItem);
	}

	render() {
		const navBar = this.state.authenticated ?
			<NavBar activeItem={this.state.activeItem} handleItemClick={this.navBarClickHandler}/> : null
		const footer = this.state.authenticated ?
			<Container fluid className={classes.Footer}></Container> : null

		return (
			<div className={classes.View}
			>
				{navBar}
				<NavSideBar show={this.state.authenticated}>
					<Switch>
						<Route path="/login" render={(props) => (<LoginPage/>)}/>
						<Route path="/" exact
							   render={(props) => (this.state.authenticated ? <p>Home Content</p> : <Redirect to='/login'/>)}/>
					</Switch>
				</NavSideBar>
				{footer}
			</div>
		);
	}
}

export default View;