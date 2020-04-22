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
                        <li class="nav"><a href="">See Kategorie</a></li>
                        <li class="nav"><a href="">Login</a></li>
                        <li class="nav"><a href="">About</a></li>
                        <li class="nav"><a href="">Notice Board</a></li>
                    </ul>
                </nav>
        </div>
        )
    }
}

export default NavigationBar