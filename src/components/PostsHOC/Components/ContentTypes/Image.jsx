import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import thumb from '../../assets/img/thumb.png';

export default class Image extends Component {
    
    render() {
        return (
                <Grid container spacing={8} direction="column" alignItems={'center'} alignContent={"center"} >
                <Paper style={{ padding: '1rem', marginBottom:'1rem'}} elevation={4}>
                    <Grid item>
                        <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} style={{ maxWidth: '80vw', maxHeight: '60vh' }} src={this.props.url} alt={this.props.title} />
                    </Grid>
                </Paper>
                    <Grid item>
                        <Typography gutterBottom alt={''} align={"center"} >
                            {this.props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={"secondary"} onClick={() => this.props.toggleModal()}>Close</Button>
                    </Grid>
                </Grid>
        );
    }
}