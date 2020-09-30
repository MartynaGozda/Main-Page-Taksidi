
import React, { Component } from "react";
import './Program.scss';

class Program extends Component {
    render() {
        return (
            <div class="oneProgramBox">
                <div>
                <i class={this.props.icon} />
                <h4>{this.props.program}</h4>
                <p>{this.props.info}</p>
                <button class="btn">{this.props.btn}</button>
                </div>
            </div>
        );
    }
}

export default Program