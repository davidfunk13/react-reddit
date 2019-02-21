import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Comment extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                        <Typography gutterBottom alt={''} align={"center"} >
                        {this.props.author}
                        </Typography>
                    <Grid item>
                        <Typography>
                            {this.props.comment}
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