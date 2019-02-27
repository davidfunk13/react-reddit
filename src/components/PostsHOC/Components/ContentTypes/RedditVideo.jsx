import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';


export default class RedditVideo extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column" alignContent={'center'} alignItems={"center"} >
                    <Paper style={{ padding: '1rem', marginBottom: '1rem' }} elevation={4}>
                        <video style={{ position: 'relative', maxWidth: '100%', maxHeight: '60vh' }} onError={(e) => { e.target.onerror = null; e.target.src = this.props.thumb }} autoPlay loop>
                            <source style={{ position: 'absolute', top: 0, left: 0 }} src={this.props.url} type="video/mp4"></source>
                        </video>
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
            </div>
        );
    }
}