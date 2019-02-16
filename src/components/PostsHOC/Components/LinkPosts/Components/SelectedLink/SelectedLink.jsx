import React, { Component } from 'react';
import {Reddit} from '../../../../../../utils/Reddit.js'
export default class SelectedLink extends Component {

    render() {
        const { classes } = this.props.store;
        const { post } = this.props.postData;
        return (
            <div>
                {Reddit.sortPosts(post, this.props, true)}
            </div>
        );
    }
}