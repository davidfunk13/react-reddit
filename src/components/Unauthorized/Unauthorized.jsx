
import React, { Component } from "react";
import {Typography } from '@material-ui/core/';
// import classNames from "classnames"



export default class Unauthorized extends Component {
    render() {
        const { open, classes, classNames } = this.props.store;
        return (
            <div >
                <main className={classNames(classes.content, {[classes.contentShift]: open})} >
                    <Typography>
                        Please Authorize Reddit to use this application by clicking the lock icon in the AppBar!
                    </Typography>
                </main>
            </div>

        );
    }
}
