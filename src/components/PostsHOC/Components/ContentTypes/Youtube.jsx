import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class Youtube extends Component {
    getYoutubeSrc = (url) => {
        let srcWithQuotes = url.match(/src=([^\s]*)\s/)[1];
        let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1)
        return src;
    }
    render() {
        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                    <Grid item>
                        <iframe title='youtube-link' style={{ height: '60vh', width: '90vw', paddingBottom: '.5rem' }}
                            src={this.getYoutubeSrc(this.props.url)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </Grid>
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