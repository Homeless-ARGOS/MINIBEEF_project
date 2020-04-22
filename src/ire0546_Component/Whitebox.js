import React, { Component } from 'react';
import './Box.css'

class WhiteBox extends Component {
    render() {
        return (
            <div id="WhiteBox">
                <h2>{this.props.titles}</h2>
                <h5>
                   {this.props.descs}
                </h5>
            </div>
        )
    }
}

export default WhiteBox