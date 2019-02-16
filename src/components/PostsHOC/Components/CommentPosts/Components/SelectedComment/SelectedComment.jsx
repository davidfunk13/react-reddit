import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';

export default class SelectedComment extends Component {

    componentDidMount() {
        console.log(this.props)
    };

    render() {
        const { classes } = this.props.store;
        return (
            <div>
                <Grid container spacing={8} direction={"column"} alignContent={"center"} >
                    <Grid item>
                        <Typography>
                            {this.props.comment.author}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paper style={classes.SelectedComment} elevation={8}>
                            <Typography>
                                {this.props.comment.comment}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Button onClick={() => this.props.toggleModal()} color="secondary" variant={'contained'}>Close</Button>
                </Grid>
            </div>
        );
    }
}