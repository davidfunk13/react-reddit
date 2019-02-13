import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class SelectedImage extends Component {


    componentDidMount() {
        console.log(this.props.imageData)
    }

    render() {
        const { classes } = this.props.store;
        const { imageData } = this.props;
        const { type } = imageData;
        // const { html } = imageData.img;
        // let srcWithQuotes = imageData.html.match(/src\=([^\s]*)\s/)[1];
        // let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1)
        return (
            <div>
                {type === 'gfycat' ?
                    <div style={{position: 'relative', paddingBottom: 'calc(70.80% + 44px)'}}>
                        {/* <iframe src={src} frameBorder='0' scrolling='no' width='100%' height='100%' style={{position:'absolute',top:0,left:0}} allowFullScreen></iframe> */}
                    </div>
                    :
                    type === 'redditVideo' ?
                    <div>
          <video autoPlay loop>
                        <source src={imageData.img.fallback_url} type="video/mp4"></source>
                    </video>
                        </div>
                        :
                        type === 'image' ?
                            <div>image</div>
                            :
                            type === 'gifv' ?
                                <div>gifv</div>
                                :
                                type === 'youtube' ?
                                    <div>youtube</div>
                                    :
                                    null
                }
                {/* {imageData.img.includes('mp4') ?
                    <video autoPlay loop className={classes.modalImg}>
                        <source src={imageData.img} type="video/mp4"></source>
                    </video>
                    :
                    <img className={classes.modalImg} src={this.props.imageData.img} alt={this.props.imageData.title} />
                } */}
                <div className={classes.modalText}>
                    <p>{this.props.imageData.title}</p>
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}