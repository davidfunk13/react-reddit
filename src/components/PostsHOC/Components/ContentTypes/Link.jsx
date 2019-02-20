import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Link extends Component {
    render() {
        return (
                <Grid container direction="column" alignItems={"center"} >
                <Grid item xs>
                    <Typography gutterBottom noWrap>
                        {this.props.title}
                    </Typography>
                </Grid>
                <Grid item xs>

                    <Typography>
                        External Link Will Open in New Tab:
                    </Typography>
                    </Grid>
                    <Grid item xs>

                    <Typography>
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer">Click Here</a> 
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" color={"secondary"} onClick={() => this.props.toggleModal()}>Close</Button>
                    </Grid>
                </Grid>
        );
    }
}