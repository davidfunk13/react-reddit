import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Saved extends Component {
    render() {
        return (
           <div>
               <p>Saved</p>
               <Link to="/">Back</Link>
           </div>
        )
    }
}