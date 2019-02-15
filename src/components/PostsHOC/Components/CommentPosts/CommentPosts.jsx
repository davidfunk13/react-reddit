import React, { Component } from 'react';
import { Comment } from '../AllPosts/Components/Posts/index';
import SelectedComment from './Components/SelectedComment/SelectedComment';
import thumb from '../../assets/img/thumb.png'
import { Dialog } from '@material-ui/core';

export default class CommentPosts extends Component {
    state = {
        isOpen: false,
    }
    handleOpen = (post, title, type) => {
        this.setState({
            isOpen: true,
            current: {
                author: post.data.author,
                comment: post.data.body
            }
        });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { classes } = this.props.store;
        const posts = this.props.posts.filter(post => post.data.body || post.kind === 't1');
        console.log(posts)
        return (
            <div>
                <Dialog onClose={() => this.toggleModal()} classes={{ paper: classes.dialog }} open={this.state.isOpen}>
                    <SelectedComment comment={this.state.current} {...this.props} />
                </Dialog>
                {posts.map(post => {
                    return (
                        <div key={post.data.id} onClick={()=> this.handleOpen(post)}>
                            <Comment key={post.data.id} post={post} {...this.props} />
                        </div>
                    )
                })}
            </div>
        )
    }
}