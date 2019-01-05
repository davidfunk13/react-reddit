import React, { Component } from 'react';
import { Auth } from '../Auth';
import history from '../history'

export default class Callback extends Component {

    componentDidMount() {
        Auth.handleAuthentication();
        //timeout is just so i can SEE the callback component to add a css spinner later. dont forget ;)
        setTimeout(
            () => history.replace('/'),
            3000
        );
    }

    render() {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}
