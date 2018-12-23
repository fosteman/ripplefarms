import React from "react";
import {Icon, Sidebar, Menu} from 'semantic-ui-react';

class SideBar extends React.Component {
    render() {
        return (
            <Sidebar className='right fixed' as={Menu} icon='labeled' inverted vertical visible width='thick'>
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='caret square left' />
                    Racks
                </Menu.Item>
            </Sidebar>
        )
    }
}

export default SideBar;