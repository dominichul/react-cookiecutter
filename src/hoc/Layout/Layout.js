import React, {Component} from 'react';

import NavBar from '../../components/UI/NavBar/NavBar';

class Layout extends Component {

	navBarClickHandler = (event, activeItem) => {
		console.log(event, activeItem);
	}

	render() {
		return (
			<div>
				<NavBar/>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;