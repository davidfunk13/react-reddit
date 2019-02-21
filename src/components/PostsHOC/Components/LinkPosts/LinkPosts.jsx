import React, { Component } from 'react';
import SelectedLink from './Components/SelectedLink/SelectedLink';
import { Reddit } from '../../../../utils/Reddit';
import { Dialog } from '@material-ui/core';
import thumb from '../../assets/img/thumb.png';
export default class LinkPost extends Component {
    state = {
        isOpen: false,
    }
    
    handleOpen = (post) => {
        this.setState({
            isOpen: true,
            current: {
                post: post,
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
    render() {
        let { classes } = this.props.store;
        const posts = this.props.posts.filter(post => post.kind === 't3');
        return (
            <div>
                <Dialog onClose={() => this.toggleModal()} classes={{ paper: classes.dialog }} open={this.state.isOpen}>
                    <SelectedLink toggleModal={this.toggleModal} postData={this.state.current} {...this.props} />
                </Dialog>
                {posts.map(post => {
                    return <div key={post.data.id} onClick={() => this.handleOpen(post)}>
                        {Reddit.sortPosts(post, this.props)}
                    </div>
                })}
            </div>
        )
    }
}