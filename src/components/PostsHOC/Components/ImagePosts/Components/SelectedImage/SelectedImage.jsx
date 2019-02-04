import React, { Component } from 'react';

export default class SelectedImage extends Component {


    componentDidMount() {
        console.log(this.props.store)
        console.log(this.props)
    }

    render() {
        const { classes } = this.props.store;
        const { imageData } = this.props;
        return (
            <div className={classes.modal}>
                {imageData.img.includes('mp4') ?
                    <video autoPlay loop className={classes.modalImg}>
                        <source src={imageData.img} type="video/mp4"></source>
                    </video>
                    :
                    <img className={classes.modalImg} src={this.props.imageData.img} alt={this.props.imageData.title} />
                }
                <div className={classes.modalText}>
                    <p>{this.props.imageData.title}</p>
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}