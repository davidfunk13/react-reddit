import React, { Component } from 'react';
import { Comment as CommentCard } from '../AllPosts/Components/Posts/index';
import SelectedComment from './Components/SelectedComment/SelectedComment';
import thumb from '../../assets/img/thumb.png'
import { Dialog } from '@material-ui/core';
import { Reddit } from '../../../../utils/Reddit';

export default class CommentPosts extends Component {
    state = {
        isOpen: false,
    }
    handleOpen = (post) => {
        this.setState({
            isOpen: true,
            post: post
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
                    <SelectedComment toggleModal={this.toggleModal} post={this.state.post} {...this.props} />
                </Dialog>
                {posts.map(post => {
                    return <div key={post.data.id} onClick={() => this.handleOpen(post)}>
                    {console.log('ass')}
                        {Reddit.sortPosts(post, this.props)}
                    </div>
                })}
            </div>
        )
    }
}