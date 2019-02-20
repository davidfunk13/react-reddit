import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Youtube extends Component {
    render() {
        const { classes } = this.props.store;
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                        <Typography>
                            Youtube goes here
                        </Typography>
                    <Grid item>
                        <Typography gutterBottom alt={''} align={"center"} >
                            Title
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={"secondary"} onClick={() => this.props.toggleModal()}>Close</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}