import React, { Component } from 'react';
import { Reddit } from '../../../../utils/Reddit.js';
import { Dialog } from '@material-ui/core';
import SelectedPost from './Components/SelectedPost/SelectedPost';
import thumb from '../../assets/img/thumb.png'

export default class AllPosts extends Component {
    state = {
        isOpen: false,
    }
    handleOpen = (post, props) => {
        this.setState({
            isOpen: true,
            current: {
                post: Reddit.sortPosts(post, props, true),
                thumb: thumb,
            }
        });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    renderThumb = (thumbData) => {
        switch (thumbData) {
            case 'self':
                return thumb
            case 'default':
                return thumb
            default:
                return thumbData;
        }
    };

    render() {
        const { posts } = this.props;
        let { classes } = this.props.store;
        return (
            <div>
                <Dialog onClose={() => this.toggleModal()} classes={{ paper: classes.dialog }} open={this.state.isOpen}>
                    <SelectedPost postData={this.state.current} {...this.props} />
                </Dialog>
                {posts.map((post, index) => {
                    return (
                        <div key={post.data.id} onClick={() => this.handleOpen(post, post.data.title, post.data.type, this.props)}>
                            {Reddit.sortPosts(post, this.props)}
                        </div>
                    )
                })}
            </div>
        )
    }
}
