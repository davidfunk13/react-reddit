import React, { Component } from 'react';
import {Typography} from '@material-ui/core';

export default class SelectedComment extends Component {

    componentDidMount() {
     console.log(this.props)
    };

    render() {
        const { classes } = this.props.store;
        return (
            <div>
                <div className={classes.modalText}>
                    <Typography>
                      
                        {this.props.comment.author}
                    </Typography>
                    <Typography>
                      
                        {this.props.comment.comment}
                    </Typography>
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}