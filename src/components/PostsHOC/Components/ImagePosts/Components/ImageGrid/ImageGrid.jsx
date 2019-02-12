import React, { Component } from 'react';
import { GridList, GridListTile, Dialog, Paper } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png'
import SelectedImage from '../SelectedImage/SelectedImage';

export default class ImageGrid extends Component {
  state = {
    isOpen: false,
    posts: {
      all: this.props.tileData,
      gfycat: this.props.gfycat,
      images: this.props.images,
      redditVideo: this.props.redditVideo,
      youtube: this.props.youtube,
      gifv: this.props.gifv
    },
    current: {
      img: '',
      title: ''
    }
  }

  handleOpen = (img, title) => {
    this.setState({
      isOpen: true,
      current: {
        img: img,
        title: title,
      }
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
    const posts = this.props.tileData
    console.log(this.state)
    return (
      <div>
        <Dialog onClose={() => this.toggleModal()} classes={{ paper: classes.dialog }} open={this.state.isOpen}>
          <SelectedImage imageData={this.state.current} toggleModal={this.toggleModal} {...this.props} />
        </Dialog>
        <Paper elevation={4}>
        <GridList className={classes.gridList} cols={3}>
        {this.state.posts.all.map(post=>{
          console.log(post)
        })}
          {/* {posts.map((tile, index) => {
            if (tile.data.url.includes('gifv')) {
              let url = tile.data.url.replace('gifv', 'mp4')
              return (
                <GridListTile  style={{padding:'0'}} onClick={() => this.handleOpen(url, tile.data.title)} key={tile.data.url} cols={tile.cols}>
                  <video onError={(e) => { e.target.onerror = null; e.target.src = thumb }} autoPlay loop>
                    <source src={url} type="video/mp4"></source>
                  </video>
                </GridListTile>
              )
            } 
            else {
              return (
                <GridListTile style={{padding: '0'}} onClick={() => this.handleOpen(tile.data.url, tile.data.title)} key={tile.data.url} cols={tile.cols}>
                  <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={tile.data.url} alt="" />
                </GridListTile>
              )
            }
          })} */}
        </GridList>
        </Paper>
      </div>
    );
  }
}