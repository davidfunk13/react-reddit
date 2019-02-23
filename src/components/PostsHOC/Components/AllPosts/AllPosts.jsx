import React, { Component } from 'react';
import { Reddit } from '../../../../utils/Reddit.js';
import { Dialog, Grid } from '@material-ui/core';
import SelectedPost from './Components/SelectedPost/SelectedPost';
import thumb from '../../assets/img/thumb.png'

export default class AllPosts extends Component {
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
                    <SelectedPost toggleModal={()=> this.toggleModal()} postData={this.state.current} {...this.props} />
                </Dialog>
                <Grid container direction={'column'} alignContent={'center'} alignItems={'center'}>
                <Grid item xs={12}>
                {posts.map((post, index) => {
                    return (
                        <div key={post.data.id} onClick={() => this.handleOpen(post)}>
                            {Reddit.sortPosts(post, this.props)}
                        </div>
                    )
                })}
                </Grid>
                </Grid>
            </div>
        )
    }
}
