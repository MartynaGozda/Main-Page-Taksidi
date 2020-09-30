
import React from 'react';
import './Menu.scss';

class MenuEl extends React.Component {
    render() {
        return (
            <>
                <li class="navItem"><a href={this.props.menu_link}>{this.props.name}<i class={this.props.class}></i></a></li>
            </>
        );
    }
}

export default MenuEl