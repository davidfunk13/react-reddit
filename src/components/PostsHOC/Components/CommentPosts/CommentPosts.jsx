import React, { Component } from 'react';
import { Comment } from '../Posts/index';

export default class CommentPosts extends Component {
    render() {
        const posts = this.props.posts.filter(post => post.kind === 't1')
        return (
            posts.map(post => {
                return <Comment key={post.data.id} post={post} {...this.props} />
            })
        )
    }
}