import React, { Fragment, Component } from 'react';
import { GridList, GridListTile, Dialog, Paper } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png'
import SelectedImage from '../SelectedImage/SelectedImage';


export default class ImageGrid extends Component {
  componentDidMount() {
    console.log(this.props)
  }
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
      type: '',
      img: '',
      title: ''
    }
  }

  handleOpen = (img, title, type) => {
    this.setState({
      isOpen: true,
      current: {
        type: type,
        img: img,
        title: title,
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
              if (post.type === 'gfycat') {
                let { oembed } = post.data.media;
                let srcWithQuotes = oembed.html.match(/src\=([^\s]*)\s/)[1];
                let thumb = post.data.preview.images[0].resolutions[1].url;
                let src = srcWithQuotes.substring(1, srcWithQuotes.length - 1);
                return (
                  <GridListTile style={{ padding: '0' }} onClick={() => this.handleOpen(oembed, post.data.title, post.type)} key={post.data.id} type={post.type} cols={post.cols}>
                    <img src={thumb} alt={post.data.title} />
                  </GridListTile>
                );
              } else if (post.type === 'youtube') {
                let { oembed } = post.data.media;
                let thumb = oembed.thumbnail_url;
                return (
                  <GridListTile style={{ padding: '0' }} onClick={() => this.handleOpen(oembed, post.data.title, post.type)} key={post.data.id} type={post.type} cols={post.cols}>
                    <img src={thumb} alt={post.data.title} />
                  </GridListTile>
                )
              } else if (post.type === 'redditVideo') {

                let { reddit_video } = post.data.secure_media;
                let thumb = post.data.preview.images[0].resolutions[1].url;
                return (
                  <GridListTile style={{ padding: '0' }} onClick={() => this.handleOpen(reddit_video, post.data.title, post.type)} key={post.data.id} type={post.type} cols={post.cols}>
                    <img src={thumb} alt={post.data.title} />
                  </GridListTile>
                )
              } else if (post.type === 'image') {
                return (
                  <GridListTile style={{ padding: '0' }} onClick={() => this.handleOpen(post.data.url, post.data.title, post.type)} key={post.data.id} type={post.type} cols={post.cols}>
                    <img src={post.data.url} alt={post.data.title} />
                  </GridListTile>
                )
              } else if (post.type === 'gifv') {
            
                let url = post.data.url.replace('gifv', 'mp4');
                let thumb = post.data.preview.images[0].resolutions[1].url;

                return (
                  <GridListTile style={{ padding: '0' }} onClick={() => this.handleOpen(url, post.data.title, post.type)} key={post.data.id} type={post.type} cols={post.cols}>
                    <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={thumb} alt={post.data.title} />

                  </GridListTile>
                )
              }
            })}
          </GridList>
        </Paper>
      </div>
    );
  }
}