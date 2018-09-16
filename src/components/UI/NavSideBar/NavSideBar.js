import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import classes from './NavSideBar.css';

class NavSidebar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div className={classes.NavSideBar}>
        <Sidebar.Pushable as={Segment}>
           <Sidebar className={classes.Pusher} as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='arrow right' />
              Login
            </Menu.Item>
            <Menu.Item as='a' color='white'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher className={classes.NavSideBarContent}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default NavSidebar;