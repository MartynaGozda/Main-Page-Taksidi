
import React, { Component } from "react";
import './Program.scss';

class Program extends Component {
    render() {
        return (
            <div class="oneProgramBox">
                <i class={this.props.singleProgram.icon} />
                <h4>{this.props.singleProgram.program}</h4>
                <p>{this.props.singleProgram.info}</p>
                <button class="btn">{this.props.singleProgram.btn}</button>
            </div>
        );
    }
}

export default Program