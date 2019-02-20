import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Image extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                    <Grid item>
                        <img style={{ maxWidth: '90vw', maxHeight: '60vh', paddingBottom: '.5rem' }} src={this.props.url} alt={this.props.title} />
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom alt={''} align={"center"} >
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