import React, { Component } from 'react';

export default class SelectedImage extends Component {


    componentDidMount() {
        console.log(this.props.store)
    }

    render() {
        const { classes } = this.props.store;
        return (
            <div className={classes.modal}>
                <img className={classes.modalImg} src={this.props.imageData.img} alt={this.props.imageData.title} />
                <div className={classes.modalText}>
                    <p>{this.props.imageData.title}</p>
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}