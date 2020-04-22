import React, { Component } from 'react';
import './Box.css';
import Whitebox from './Whitebox.js'
import Graybox from './Graybox.js'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contents : [
            {title: "This A", desc: "White is a symbol of purity and purity. White is also a symbol of nobleness."},
            {title: "This B", desc: " It's actually a meaningless sentence, but I just wanted to write it."},
            {title: "This C", desc: "Gray is something obscure but modern Sometimes it looks prettier than white."},
            {title: "This D", desc: "but pants are really stupid. You won't read it."},
          ]
        }
      }
    render() {
        return (
            <div id="Detail">
                <div id="blank"></div>
                <div id="contents">
                    <Whitebox titles={this.state.contents[0].title} descs={this.state.contents[0].desc}></Whitebox>
                    <Graybox titles={this.state.contents[1].title} descs={this.state.contents[1].desc}></Graybox>
                    <Whitebox titles={this.state.contents[2].title} descs={this.state.contents[2].desc}></Whitebox>
                    <Graybox titles={this.state.contents[3].title} descs={this.state.contents[3].desc}></Graybox>
                    <Whitebox titles={this.state.contents[1].title} descs={this.state.contents[0].desc}></Whitebox>
                    <Graybox titles={this.state.contents[2].title} descs={this.state.contents[0].desc}></Graybox>
                </div>
            </div>
        )
    }
}

export default Detail