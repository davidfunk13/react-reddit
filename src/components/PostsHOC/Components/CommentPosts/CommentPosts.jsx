import React, { Component } from 'react';
import { Comment } from '../AllPosts/Components/Posts/index';
import {Grow} from '@material-ui/core';

export default class CommentPosts extends Component {
    render() {
        const posts = this.props.posts.filter(post => post.data.body || post.kind === 't1' );
        console.log(posts)
        return (
            posts.map(post => {
                return (
                    <Grow in={true} timeout={500}>

                <Comment key={post.data.id} post={post} {...this.props} />
                    </Grow>
                )
            })
        )
    }
}