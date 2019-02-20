import React, { Component } from 'react';
import thumb from '../../../../assets/img/thumb.png'
import { Reddit } from '../../../../../../utils/Reddit';
import { Comment, Link, Image, Video } from '../Posts/index';

export default class SelectedPost extends Component {
    componentDidMount() {
    }
    render() {
        const {post} = this.props.postData;
        return Reddit.sortPosts(post, this.props, true);
    }
}