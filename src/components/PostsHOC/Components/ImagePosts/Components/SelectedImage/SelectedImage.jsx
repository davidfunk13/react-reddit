import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';


export default class SelectedImage extends Component {


    componentDidMount() {
        console.log(this.props.imageData)
    }
    getGfycatSrc = (imageData) => {
        console.log(imageData);
        let srcWithQuotes = imageData.img.html.match(/src\=([^\s]*)\s/)[1];
        let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1)
        return src;
    }

    render() {
        const { classes } = this.props.store;
        const { imageData } = this.props;
        const { type } = imageData;

        return (
            <div>
                {type === 'gfycat' ?
                    <div style={{ position: 'relative', paddingBottom: 'calc(70.80% + 44px)' }}>
                        <iframe src={this.getGfycatSrc(imageData)} frameBorder='0' scrolling='no' width='100%' height='100%' style={{ position: 'absolute', top: 0, left: 0 }} allowFullScreen></iframe>
                    </div>
                    :
                    type === 'redditVideo' ?
                        <div style={{ display: 'flex', flexFlow: 'column', alignContent: 'center' }}>
                            <video style={{ maxHeight: '60vh', maxWidth: '100vw' }} onError={(e) => { e.target.onerror = null; e.target.src = imageData.thumb }} autoPlay loop>
                                <source src={imageData.img.fallback_url} type="video/mp4"></source>
                            </video>
                        </div>
                        :
                        type === 'image' ?
                            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                                <img style={{ maxWidth: '100vw', maxHeight: '60vh' }} src={imageData.img} alt={imageData.title} />
                            </div>
                            :
                            type === 'gifv' ?
                                <div style={{ display: 'flex', flexFlow: 'column', alignContent: 'center' }}>
                                    <video style={{ maxHeight: '55vh', width: '100%' }} onError={(e) => { e.target.onerror = null; e.target.src = imageData.thumb }} autoPlay loop>
                                        <source src={imageData.img} type="video/mp4"></source>
                                    </video>
                                </div>
                                :
                                type === 'youtube' ?
                                    <iframe style={{ height: '60vh', width: '100vw' }}
                                        src={this.getGfycatSrc(imageData)}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                    :
                                    null
                }
                <Grid container spacing={8} direction="column" alignItems={"center"} >
                    <Grid item>
                        <Typography align={"center"} >
                            {this.props.imageData.title}
                        </Typography>
                    </Grid>
                    <Grid item >
                    <Button  variant="contained" color={"secondary"} onClick={()=> this.props.toggleModal()}>Close Modal</Button>
                    {/* <button onClick={() => this.props.toggleModal()}>Toggle</button> */}
                    </Grid>
                </Grid>
            </div>
        );
    }
}