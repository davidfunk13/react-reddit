import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';


export default class Comment extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={8} direction="column" alignItems={"center"} >
                    <Typography variant={'h6'} gutterBottom alt={''} align={"center"} >
                        {this.props.author}
                    </Typography>
                    <Grid item>
                        <Paper style={{padding: '1rem'}} elevation={4}>
                            <Typography>
                                {this.props.comment}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={"secondary"} onClick={() => this.props.toggleModal()}>Close</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}