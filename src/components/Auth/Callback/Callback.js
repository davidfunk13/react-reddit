import React, { Component } from 'react';
import {Auth} from '../Auth';

export default class Callback extends Component {
    componentDidMount() {
        Auth.handleAuthentication();
        // history.replace('/');
        console.log('poop');
    }

    render() {
        return (
            <div className='uk-container uk-padding'>
                <p>Loading...</p>
            </div>
        )
    }
}
