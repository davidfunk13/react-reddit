
import React, { Component } from "react";
import {Typography } from '@material-ui/core/';




export default class Main extends Component {
    render() {
        const { open, classNames, classes } = this.props.store;
        return (
            <div>
                <main className={classNames(classes.content, {[classes.contentShift]: open})} >
                <div className={classes.section}>
                    <Typography variant={'h6'} >
                        Welcome
                    </Typography>
                    <Typography className={classes.main}>
                       Welcome to my React based saved Reddit post viewer! Use the hamburger nav to browse your saved posts!
                    </Typography>
                </div>
                </main>
            </div>

        );
    }
}
