import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Link extends Component {
    render() {
        return (
            <div>
                <Typography gutterBottom noWrap>
                    {this.props.title}
                </Typography>
                <Grid container direction="column" alignItems={"center"} >
                    <Grid item>
                        <Typography align={'center'}>
                            External Link Will Open in New Tab:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={'center'}>
                            <a href={this.props.url} target="_blank" rel="noopener noreferrer">Click Here</a>
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