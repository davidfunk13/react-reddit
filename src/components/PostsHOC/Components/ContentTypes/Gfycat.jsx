import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';


export default class Gfycat extends Component {
    getGfycatSrc = () => {
        let srcWithQuotes = this.props.embed.oembed.html.match(/src=([^\s]*)\s/)[1];
        let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1)
        return src;
    }
    render() {
        return (
            <div>
                <Grid container spacing={8} direction="column" alignItems={"center"} >
                    <Paper style={{ padding: '1rem', width: '80%' }} elevation={4}>
                        <div style={{ position: 'relative', width: '100%', paddingBottom: 'calc(70.80% + 50px)' }}>
                            <iframe title='gfycat-link' src={this.getGfycatSrc()} frameBorder='0' scrolling='no' width='100%' height='100%' style={{ position: 'absolute', top: 0, left: 0 }} allowFullScreen></iframe>
                        </div>
                    </Paper>
                    <Grid item>
                        <Typography gutterBottom alt={this.props.title} align={"center"} >
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