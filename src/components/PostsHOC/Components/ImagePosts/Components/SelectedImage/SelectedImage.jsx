import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Reddit } from '../../../../../../utils/Reddit';


export default class SelectedImage extends Component {
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        const {post} = this.props;
        return Reddit.sortPosts(post, this.props, true);
    }
}