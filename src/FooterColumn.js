import React, { Component } from "react";
import "./Footer.scss";

class FooterColumn extends Component {
    render() {
        return (
            <p><a href={this.props.link}>{this.props.title}</a></p>
        );
    }
}

export default FooterColumn;


