
import React, { Component } from "react";
import { Auth } from '../Auth';
import history from '../history'
import { Typography } from '@material-ui/core/';

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
        const { open, classes, classNames } = this.props.store;
        return (
            <div>
                <main className={classNames(classes.content, {[classes.contentShift]: open})} >
                    <Typography>
                   Authorizing...
                    </Typography>
                </main>
            </div>
        );
    }
}
