import React, { Component } from 'react';
import './Box.css'

class GrayBox extends Component {
    render() {
        return (
            <div id="GrayBox">
                <h2>{this.props.titles}</h2>
                <h5>                   
                    {this.props.descs}
                </h5>
            </div>
        )
    }
}

export default GrayBox