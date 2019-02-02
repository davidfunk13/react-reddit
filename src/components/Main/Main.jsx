
import React, { Component } from "react";
import {Typography } from '@material-ui/core/';




export default class Main extends Component {
    render() {
        const { open, classNames, classes } = this.props.store;
        return (
            <div>
                <main className={classNames(classes.content, {[classes.contentShift]: open})} >
                <div className={classes.section}>
                    <Typography className={classes.main}>
                       Welcome to my React based Reddit Client!
                    </Typography>
                </div>
                </main>
            </div>

        );
    }
}
