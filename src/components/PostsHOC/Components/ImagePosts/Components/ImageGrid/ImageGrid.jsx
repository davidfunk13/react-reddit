import React, { Component } from 'react';
import { Grid, GridList, GridListTile, Dialog, Paper } from '@material-ui/core';
import SelectedImage from '../SelectedImage/SelectedImage';

import thumb from '../../../../assets/img/thumb.png'
export default class ImageGrid extends Component {
  state = {
    isOpen: false,
    posts: {
      all: this.props.allPosts,
      gfycat: this.props.gfycat,
      images: this.props.images,
      redditVideo: this.props.redditVideo,
      youtube: this.props.youtube,
      gifv: this.props.gifv
    },
    current: {
      post: ''
    }
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
  imgError = (image) => {
    image.onerror = "";
    image.src = "../AllPosts/thumb.png";
    return true;
  }

  render() {
    const { classes } = this.props.store;
    const { all } = this.state.posts;
    return (
      <Grid container direction={'column'} alignContent={"center"} alignItems={'center'}>
        <Dialog onClose={() => this.toggleModal()} classes={{ paper: classes.dialog }} open={this.state.isOpen}>
          <SelectedImage post={this.state.post} toggleModal={this.toggleModal} {...this.props} />
        </Dialog>
        <Paper elevation={4}>
          <GridList className={classes.gridList} cols={3}>
            {all.map(post => {
              return (
                <GridListTile style={{ padding: '.5rem' }} onClick={() => this.handleOpen(post)} key={post.data.id} type={post.type} cols={post.cols}>
                  <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={post.thumb} alt={post.data.title} />
                </GridListTile>
              )
            })}
          </GridList>
        </Paper>
      </Grid>
    );
  }
}