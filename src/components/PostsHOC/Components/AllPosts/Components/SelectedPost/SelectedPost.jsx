import React, { Component } from 'react';
import thumb from '../../../../assets/img/thumb.png'

export default class SelectedPost extends Component {
  
    render() {
        const { classes } = this.props.store;
        return (
            <div>
                <div className={classes.modalText}>
                    <p>Poop</p>
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}