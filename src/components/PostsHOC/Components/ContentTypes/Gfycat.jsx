import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Gfycat extends Component {
    getGfycatSrc = () => {
        let srcWithQuotes = this.props.embed.oembed.html.match(/src=([^\s]*)\s/)[1];
        let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1)
        return src;
    }
    render() {
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                        <div style={{ position: 'relative', width: '90vw', paddingBottom: 'calc(70.80% + 50px)' }}>
                            <iframe title='gfycat-link' src={this.getGfycatSrc()} frameBorder='0' scrolling='no' width='100%' height='100%' style={{ position: 'absolute', top: 0, left: 0 }} allowFullScreen></iframe>
                        </div>
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