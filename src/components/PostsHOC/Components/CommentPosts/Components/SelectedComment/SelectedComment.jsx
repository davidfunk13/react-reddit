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
                            Author: {this.props.comment.author}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paper style={classes.SelectedComment} elevation={8}>
                            <Typography style={{ padding: '1rem 1rem 0 1rem' }}>
                                Comment
                            </Typography>
                            <Typography style={{ padding: '1rem' }}>
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