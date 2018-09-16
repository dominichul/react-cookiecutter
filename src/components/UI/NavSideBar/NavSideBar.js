import React, {Component} from 'react'
import {Container, Button, Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'

import {Grid} from 'semantic-ui-react'

import classes from './NavSideBar.css';

class NavSidebar extends Component {
	state = {visible: false, WindowSize: 0};

	handleResize() {
		this.setState({WindowSize: window.innerHeight - 100});
	}

	componentWillMount() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	handleButtonClick = () => this.setState({visible: !this.state.visible})

	handleSidebarHide = () => this.setState({visible: false})

	render() {
		const {visible} = this.state;

		const contentHeight = window.innerHeight - 100;

		return (
			<div className={classes.NavSideBar}>
				<Sidebar.Pushable as={Segment}>
					<Sidebar className={classes.Pusher} as={Menu} animation='overlay' icon='labeled'
							 inverted vertical visible width='thin'>
						<Menu.Item as='a'>
							<Icon name='home'/>
							Home
						</Menu.Item>
						<Menu.Item as='a'>
							<Icon name='arrow right'/>
							Login
						</Menu.Item>
						<Menu.Item as='a'>
							<Icon name='camera'/>
							Channels
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher className={classes.NavSideBarContent}>
						<Segment className={classes.Segment} style={{height: this.state.WindowSize + 'px'}} basic>
							<p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mauris feugiat, cursus sem porta, tristique ante. Curabitur pretium felis nec urna interdum sodales. Integer molestie vitae justo non varius. Aenean sed aliquam enim. Pellentesque porta fringilla ligula nec tincidunt. Etiam ut viverra lorem, interdum consectetur quam. Curabitur at diam sit amet sapien ultricies semper. Vivamus nec auctor ante. Nulla sit amet aliquam ligula, ut convallis neque. Nulla erat purus, feugiat non elementum sed, volutpat quis arcu. Aenean vehicula lectus nulla, vitae vulputate mi eleifend a. Quisque auctor tellus neque, id faucibus libero commodo sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a scelerisque ligula, a ultrices lectus. Vivamus fermentum finibus mauris, eget vestibulum nisi rutrum sit amet.

In venenatis ante ac gravida tincidunt. Nam venenatis erat bibendum, imperdiet velit vitae, tincidunt mauris. Praesent scelerisque enim at mi efficitur vestibulum. Vestibulum facilisis id turpis nec efficitur. Aliquam sit amet neque in odio euismod congue a vitae justo. Morbi et arcu vitae diam rhoncus auctor. Aliquam interdum nibh eget posuere ultrices. Sed ultrices eros et faucibus feugiat. Sed imperdiet nisl mi, quis tincidunt nisi aliquam eu. Fusce felis augue, imperdiet ut ultrices at, iaculis sit amet nisl. Aliquam varius risus a dignissim rhoncus. Fusce bibendum et neque eu viverra. Phasellus consequat metus vel euismod aliquet. Maecenas lacinia maximus justo eget fermentum.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lobortis nibh. Morbi suscipit sem ut odio convallis feugiat. Cras fermentum ex quis nibh cursus consequat. Vivamus sagittis accumsan massa, in mollis sem. Donec ipsum lectus, varius ut tempor ut, feugiat at nisl. Curabitur viverra sem in turpis luctus scelerisque. Sed mattis, mi nec fringilla pharetra, massa sapien rutrum nisi, a tincidunt elit ligula ac neque. Curabitur interdum urna at ligula rutrum facilisis. Nunc fermentum orci et vehicula elementum.

Donec ut pulvinar nisl. Sed facilisis mattis libero, in auctor mi sollicitudin sed. Nam dapibus blandit orci id efficitur. Donec laoreet eleifend quam in maximus. Sed risus tellus, rutrum ac luctus ac, hendrerit et sem. Fusce egestas sapien non justo vulputate semper at in ante. Sed vel enim quis diam laoreet tincidunt sed vitae nunc. Nunc id eros eu turpis blandit dapibus eget ut tellus. Proin pulvinar ullamcorper orci, vel hendrerit felis luctus sed. Curabitur bibendum nunc et odio tincidunt, eget facilisis magna ornare. In leo nibh, tempor ut sem eu, elementum dapibus libero. Pellentesque aliquet venenatis mi, in bibendum diam bibendum a. Donec in sem semper, tristique sem ac, condimentum nisi. Fusce arcu sem, bibendum sit amet facilisis tincidunt, luctus ut sem. Aliquam leo felis, feugiat finibus est eget, iaculis rutrum lorem. Etiam a egestas felis, sed suscipit nibh.

Donec non lacus est. Sed sit amet lacus volutpat, malesuada diam nec, dictum nisi. Suspendisse ultrices ligula risus, a consectetur mauris viverra nec. Cras et nunc hendrerit, semper tortor id, porta sem. Etiam quis elementum urna, ac sollicitudin urna. Curabitur tortor eros, auctor tempor metus sit amet, ullamcorper pretium nunc. Sed luctus molestie feugiat. Fusce commodo, risus ac imperdiet consequat, ex elit tincidunt velit, sed faucibus neque lacus at quam.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mauris feugiat, cursus sem porta, tristique ante. Curabitur pretium felis nec urna interdum sodales. Integer molestie vitae justo non varius. Aenean sed aliquam enim. Pellentesque porta fringilla ligula nec tincidunt. Etiam ut viverra lorem, interdum consectetur quam. Curabitur at diam sit amet sapien ultricies semper. Vivamus nec auctor ante. Nulla sit amet aliquam ligula, ut convallis neque. Nulla erat purus, feugiat non elementum sed, volutpat quis arcu. Aenean vehicula lectus nulla, vitae vulputate mi eleifend a. Quisque auctor tellus neque, id faucibus libero commodo sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a scelerisque ligula, a ultrices lectus. Vivamus fermentum finibus mauris, eget vestibulum nisi rutrum sit amet.

In venenatis ante ac gravida tincidunt. Nam venenatis erat bibendum, imperdiet velit vitae, tincidunt mauris. Praesent scelerisque enim at mi efficitur vestibulum. Vestibulum facilisis id turpis nec efficitur. Aliquam sit amet neque in odio euismod congue a vitae justo. Morbi et arcu vitae diam rhoncus auctor. Aliquam interdum nibh eget posuere ultrices. Sed ultrices eros et faucibus feugiat. Sed imperdiet nisl mi, quis tincidunt nisi aliquam eu. Fusce felis augue, imperdiet ut ultrices at, iaculis sit amet nisl. Aliquam varius risus a dignissim rhoncus. Fusce bibendum et neque eu viverra. Phasellus consequat metus vel euismod aliquet. Maecenas lacinia maximus justo eget fermentum.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lobortis nibh. Morbi suscipit sem ut odio convallis feugiat. Cras fermentum ex quis nibh cursus consequat. Vivamus sagittis accumsan massa, in mollis sem. Donec ipsum lectus, varius ut tempor ut, feugiat at nisl. Curabitur viverra sem in turpis luctus scelerisque. Sed mattis, mi nec fringilla pharetra, massa sapien rutrum nisi, a tincidunt elit ligula ac neque. Curabitur interdum urna at ligula rutrum facilisis. Nunc fermentum orci et vehicula elementum.

Donec ut pulvinar nisl. Sed facilisis mattis libero, in auctor mi sollicitudin sed. Nam dapibus blandit orci id efficitur. Donec laoreet eleifend quam in maximus. Sed risus tellus, rutrum ac luctus ac, hendrerit et sem. Fusce egestas sapien non justo vulputate semper at in ante. Sed vel enim quis diam laoreet tincidunt sed vitae nunc. Nunc id eros eu turpis blandit dapibus eget ut tellus. Proin pulvinar ullamcorper orci, vel hendrerit felis luctus sed. Curabitur bibendum nunc et odio tincidunt, eget facilisis magna ornare. In leo nibh, tempor ut sem eu, elementum dapibus libero. Pellentesque aliquet venenatis mi, in bibendum diam bibendum a. Donec in sem semper, tristique sem ac, condimentum nisi. Fusce arcu sem, bibendum sit amet facilisis tincidunt, luctus ut sem. Aliquam leo felis, feugiat finibus est eget, iaculis rutrum lorem. Etiam a egestas felis, sed suscipit nibh.

Donec non lacus est. Sed sit amet lacus volutpat, malesuada diam nec, dictum nisi. Suspendisse ultrices ligula risus, a consectetur mauris viverra nec. Cras et nunc hendrerit, semper tortor id, porta sem. Etiam quis elementum urna, ac sollicitudin urna. Curabitur tortor eros, auctor tempor metus sit amet, ullamcorper pretium nunc. Sed luctus molestie feugiat. Fusce commodo, risus ac imperdiet consequat, ex elit tincidunt velit, sed faucibus neque lacus at quam.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at mauris feugiat, cursus sem porta, tristique ante. Curabitur pretium felis nec urna interdum sodales. Integer molestie vitae justo non varius. Aenean sed aliquam enim. Pellentesque porta fringilla ligula nec tincidunt. Etiam ut viverra lorem, interdum consectetur quam. Curabitur at diam sit amet sapien ultricies semper. Vivamus nec auctor ante. Nulla sit amet aliquam ligula, ut convallis neque. Nulla erat purus, feugiat non elementum sed, volutpat quis arcu. Aenean vehicula lectus nulla, vitae vulputate mi eleifend a. Quisque auctor tellus neque, id faucibus libero commodo sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a scelerisque ligula, a ultrices lectus. Vivamus fermentum finibus mauris, eget vestibulum nisi rutrum sit amet.

In venenatis ante ac gravida tincidunt. Nam venenatis erat bibendum, imperdiet velit vitae, tincidunt mauris. Praesent scelerisque enim at mi efficitur vestibulum. Vestibulum facilisis id turpis nec efficitur. Aliquam sit amet neque in odio euismod congue a vitae justo. Morbi et arcu vitae diam rhoncus auctor. Aliquam interdum nibh eget posuere ultrices. Sed ultrices eros et faucibus feugiat. Sed imperdiet nisl mi, quis tincidunt nisi aliquam eu. Fusce felis augue, imperdiet ut ultrices at, iaculis sit amet nisl. Aliquam varius risus a dignissim rhoncus. Fusce bibendum et neque eu viverra. Phasellus consequat metus vel euismod aliquet. Maecenas lacinia maximus justo eget fermentum.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lobortis nibh. Morbi suscipit sem ut odio convallis feugiat. Cras fermentum ex quis nibh cursus consequat. Vivamus sagittis accumsan massa, in mollis sem. Donec ipsum lectus, varius ut tempor ut, feugiat at nisl. Curabitur viverra sem in turpis luctus scelerisque. Sed mattis, mi nec fringilla pharetra, massa sapien rutrum nisi, a tincidunt elit ligula ac neque. Curabitur interdum urna at ligula rutrum facilisis. Nunc fermentum orci et vehicula elementum.

Donec ut pulvinar nisl. Sed facilisis mattis libero, in auctor mi sollicitudin sed. Nam dapibus blandit orci id efficitur. Donec laoreet eleifend quam in maximus. Sed risus tellus, rutrum ac luctus ac, hendrerit et sem. Fusce egestas sapien non justo vulputate semper at in ante. Sed vel enim quis diam laoreet tincidunt sed vitae nunc. Nunc id eros eu turpis blandit dapibus eget ut tellus. Proin pulvinar ullamcorper orci, vel hendrerit felis luctus sed. Curabitur bibendum nunc et odio tincidunt, eget facilisis magna ornare. In leo nibh, tempor ut sem eu, elementum dapibus libero. Pellentesque aliquet venenatis mi, in bibendum diam bibendum a. Donec in sem semper, tristique sem ac, condimentum nisi. Fusce arcu sem, bibendum sit amet facilisis tincidunt, luctus ut sem. Aliquam leo felis, feugiat finibus est eget, iaculis rutrum lorem. Etiam a egestas felis, sed suscipit nibh.

Donec non lacus est. Sed sit amet lacus volutpat, malesuada diam nec, dictum nisi. Suspendisse ultrices ligula risus, a consectetur mauris viverra nec. Cras et nunc hendrerit, semper tortor id, porta sem. Etiam quis elementum urna, ac sollicitudin urna. Curabitur tortor eros, auctor tempor metus sit amet, ullamcorper pretium nunc. Sed luctus molestie feugiat. Fusce commodo, risus ac imperdiet consequat, ex elit tincidunt velit, sed faucibus neque lacus at quam.
							</p>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default NavSidebar;