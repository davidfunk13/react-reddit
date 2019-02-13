import React, { Fragment, Component } from 'react';
import { GridList, GridListTile, Dialog, Paper } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png'
import SelectedImage from '../SelectedImage/SelectedImage';


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
    const { all } = this.state.posts;
    return (
      <div>
        <Dialog onClose={() => this.toggleModal()} classes={{ paper: classes.dialog }} open={this.state.isOpen}>
          <SelectedImage imageData={this.state.current} toggleModal={this.toggleModal} {...this.props} />
        </Dialog>
        <Paper elevation={4}>
          <GridList className={classes.gridList} cols={3}>
            {all.map(post => {
              switch (post.type) {
                case 'gfycat':
                  let { oembed } = post.data.media;
                  let srcWithQuotes = oembed.html.match(/src\=([^\s]*)\s/)[1];
                  let thumb = post.data.preview.images[0].resolutions[1].url;
                  let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1);
                  return (
                    <GridListTile style={{ padding: '0' }} onClick={() => this.handleOpen(src, post.data.title)} key={post.data.id} type={post.type} cols={post.cols}>
                      <img src={thumb} alt={post.data.title} />
                    </GridListTile>
                  )
                  case 'youtube': 
                  console.log('youtube', post);
                default: return 'something went wrong'
              }
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