import React, { Component } from 'react';
import './Total.css';

class Kategorie extends Component {
    render() {
        return (
         <div id="Kategorie">
             <div id="Detail">
               {/*
                <details>
                    <summary>Kategories</summary>
                    <p>Notice</p>
                </details>
               */}
               <h3>Notice</h3>
               <h3>Team Board</h3>
               <h3>MT</h3>
               <h3>Learning</h3>
               <h3>Seminar</h3>
               <h3>ECT</h3>
             </div>
         </div>
        )
    }
}

export default Kategorie