import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class SelectedImage extends Component {
    getGfycatSrc = (imageData) => {
        let srcWithQuotes = imageData.img.html.match(/src=([^\s]*)\s/)[1];
        let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1)
        return src;
    }

    render() {
        const { classes } = this.props.store;
        const { imageData } = this.props;
        const { type } = imageData;

        return (
            <div>
                <Grid container direction="column" alignItems={"center"} >
                    {type === 'gfycat' ?
                        <div style={{ position: 'relative', width: '90vw', paddingBottom: 'calc(70.80% + 50px)' }}>
                            <iframe src={this.getGfycatSrc(imageData)} frameBorder='0' scrolling='no' width='100%' height='100%' style={{ position: 'absolute', top: 0, left: 0 }} allowFullScreen></iframe>
                        </div>
                        :
                        type === 'redditVideo' ?
                            <video style={{ maxHeight: '60vh', maxWidth: '90vw', paddingBottom: '.5rem' }} onError={(e) => { e.target.onerror = null; e.target.src = imageData.thumb }} autoPlay loop>
                                <source src={imageData.img.fallback_url} type="video/mp4"></source>
                            </video>
                            :
                            type === 'image' ?
                                <img style={{ maxWidth: '90vw', maxHeight: '60vh', paddingBottom: '.5rem' }} src={imageData.img} alt={imageData.title} />
                                :
                                type === 'gifv' ?
                                    <video style={{paddingBottom:'.5rem'}} width={'90%'} onError={(e) => { e.target.onerror = null; e.target.src = imageData.thumb }} autoPlay loop>
                                        <source src={imageData.img} type="video/mp4"></source>
                                    </video>
                                    :
                                    type === 'youtube' ?
                                        <iframe style={{ height: '60vh', width: '90vw', paddingBottom: '.5rem' }}
                                            src={this.getGfycatSrc(imageData)}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                        :
                                        null
                    }
                    <Grid item>
                        <Typography gutterBottom alt={this.props.imageData.title} align={"center"} >
                            {this.props.imageData.title}
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