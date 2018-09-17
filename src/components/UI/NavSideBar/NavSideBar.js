import React, {Component} from 'react'
import {Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'

import classes from './NavSideBar.css';

class NavSidebar extends Component {
	state = {visible: false, WindowSize: 0};

	handleResize() {
		if (this.props.show) {
			this.setState({WindowSize: window.innerHeight - 100});
		} else {
				this.setState({WindowSize: window.innerHeight});
		}
	}

	componentWillMount() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	handleButtonClick = () => this.setState({visible: !this.state.visible})

	handleSidebarHide = () => this.setState({visible: false})

	render() {
		const viewSideBar = this.props.show ? classes.NavSideBarContent : classes.NavSideBarContentNoAuth;

		return (
			<div className={classes.NavSideBar}>
				<Sidebar.Pushable as={Segment}>
					<Sidebar className={classes.Pusher} as={Menu} animation='overlay' icon='labeled'
							 inverted vertical visible={this.props.show} width='thin'>
						<Menu.Item as='a'>
							<Icon size='small' name='home'/>
							Home
						</Menu.Item>
						<Menu.Item as='a'>
							<Icon size='small' name='arrow right'/>
							Login
						</Menu.Item>
						<Menu.Item as='a'>
							<Icon size='small' name='camera'/>
							Channels
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher className={viewSideBar}>
						<Segment className={classes.Segment} style={{height: this.state.WindowSize + 'px'}} basic>
							{this.props.children}
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default NavSidebar;