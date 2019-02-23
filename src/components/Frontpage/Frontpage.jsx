
import React, { Component } from "react";
import { Typography } from '@material-ui/core/';




export default class Frontpage extends Component {
    render() {
        const { open, classNames, classes } = this.props.store;
        return (
            <div>
                <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                    <div className={classes.section}>
                        <Typography className={classes.main}>
                            frontpage
                        </Typography>
                    </div>
                </main>
            </div>

        );
    }
}
