import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
export default class GifVideo extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                <Grid item>
                <video style={{ maxHeight: '60vh', maxWidth: '90vw', paddingBottom: '.5rem' }} onError={(e) => { e.target.onerror = null; e.target.src = this.props.thumb }} autoPlay loop>
                    <source src={this.props.url} type="video/mp4"></source>
                </video>
                </Grid>
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