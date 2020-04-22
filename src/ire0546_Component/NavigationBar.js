import React, { Component } from 'react';
import './Total.css';
import logo from './argosLogo.png';


class NavigationBar extends Component {
    render() {
        return (
            <div id="NavigationBar">
                <img src={logo} id="logo"></img>

                <nav>
                    <ul class="container">
                        <li class="nav"><a onClick={function() {
                            this.props.onCategoryClick('welcome')
                        }.bind(this)}>Home</a></li>
                        <li class="nav"><a onClick={function() {
                            this.props.onCategoryClick('login')
                        }.bind(this)}>Login</a></li>
                        <li class="nav"><a onClick={function() {
                            this.props.onCategoryClick('about');
                        }.bind(this)}>About</a></li>
                    </ul>
                </nav>
        </div>
        )
    }
}

export default NavigationBar