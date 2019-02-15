import React, { Component } from 'react';

export default class SelectedComment extends Component {

    componentDidMount() {
     
    };

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