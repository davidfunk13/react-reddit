import React, { Component } from 'react';
import { Link } from '../AllPosts/Components/Posts/index';
import { Reddit } from '../../../../utils/Reddit';

export default class LinkPost extends Component {
    render() {
        const posts = this.props.posts.filter(post => post.kind === 't3');
        console.log(posts)
        return (
            posts.map(post => {
                return Reddit.sortPosts(post, this.props);
            })
        )
    }
}