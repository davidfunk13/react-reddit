import React, { Component } from 'react';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { Reddit } from '../../../../../../utils/Reddit';

export default class SelectedComment extends Component {

    componentDidMount() {
        console.log(this.props)
    };

    render() {
        const { classes } = this.props.store;
        return (
            <div>
                {Reddit.sortPosts(this.props.post, this.props, true)}
            </div>
        );
    }
}