
import React, { Component } from "react";
import { Auth } from '../Auth';
import history from '../history'
import { Grid, Typography, CircularProgress } from '@material-ui/core/';

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
            <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                <Grid style={{marginBottom: '3rem'}} container direction={'column'} justify={'center'} alignItems={'center'} alignContent={'center'}>
                    <Grid item xs={12}>
                        <Typography style={{marginBottom: '3rem'}}>
                            Authorizing...
                        </Typography>
                    </Grid>
                    <CircularProgress size={100} />
                </Grid>
            </main>
        );
    }
}
