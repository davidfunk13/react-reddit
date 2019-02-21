
import React, { Component } from "react";
import { Typography, Divider, Grid } from '@material-ui/core/';
// import classNames from "classnames"



export default class Unauthorized extends Component {
    render() {
        const { open, classes, classNames } = this.props.store;
        return (
                <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                    <Grid container direction={'column'} alignContent={'center'}>
                        <Typography component={'h1'} variant="h5" gutterBottom>
                            Welcome
                        </Typography>
                        <Typography component={'p'} gutterBottom>
                            I am a junior javascript developer, and this is my React based Reddit client!
                        </Typography>
                        <Divider />
                        <Typography component={'h1'} variant="h5" gutterBottom>
                            About this App
                        </Typography>
                        <Typography component={'p'} gutterBottom>
                            This was my two-in-one attempt at learning oAuth as well as MaterialUI. I am a fullstack developer, but wanted to take this project to work on polishing my front end capabilities.
                        </Typography>
                    </Grid>
                </main>
        );
    }
}
