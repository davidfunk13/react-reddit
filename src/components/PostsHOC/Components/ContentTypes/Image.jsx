import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';


export default class Image extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={8} direction="column" alignItems={"center"} >
                <Paper style={{ padding: '1rem' }} elevation={4}>
                    <Grid item>
                        <img style={{ maxWidth: '90vw', maxHeight: '60vh' }} src={this.props.url} alt={this.props.title} />
                    </Grid>
                </Paper>
                    <Grid item>
                        <Typography style={{marginTop: '.5rem'}}gutterBottom alt={''} align={"center"} >
                            {this.props.title}
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