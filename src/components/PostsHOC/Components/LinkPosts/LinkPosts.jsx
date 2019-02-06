import React, { Component } from 'react';
import { Link } from '../AllPosts/Components/Posts/index';

export default class LinkPost extends Component {
    render() {
        const posts = this.props.posts.filter(post => post.kind === 't3');
        return (
            posts.map(post => {
                return <Link key={post.data.id} post={post} {...this.props} />
            })
        )
    }
}