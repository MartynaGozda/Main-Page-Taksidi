import React, { Component } from "react";
import "./Partners.scss";


class Partner extends Component {
    render() {
        return (
            <div class="onePartner">
                <div class="imageLogo">
                    <img src={require(`${this.props.singlePartner.image}`)} alt="" /></div>
                <div class="partnersInfo">
                    <p>{this.props.singlePartner.info}</p>
                    <a href={this.props.singlePartner.page} target="_blank" rel="noopener noreferrer">Dowiedz się więcej<i class="arrow"></i></a>
                </div>
            </div>
        );
    }
}

export default Partner;
