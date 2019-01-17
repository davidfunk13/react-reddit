import React, { Component } from 'react';
import { GridList, GridListTile, Modal } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png'

export default class ImageGrid extends Component {
  state = {
    isOpen: false,
    current: {
      img: '',
      title: ''
    },
    tiles: [],
  }
  componentDidMount() {
    this.setState({ tiles: this.props.tileData });
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

  imgError = (image) => {
    image.onerror = "";
    image.src = "../AllPosts/thumb.png";
    return true;
  }

  render() {
    const { classes } = this.props.store;
    const posts = this.props.posts.filter(post => post.kind === 't3' && (post.data.url.includes('gif') || post.data.url.includes('jpg') || post.data.url.includes('jpeg') || post.data.url.includes('png')))
    const tiles = this.state.tiles;

    return (
      <div>
        <GridList className={classes.gridList} cols={3}>
          {tiles.map((tile, index) => {
            console.log(tile)
            return <GridListTile key={tile.img} cols={tile.cols}>
              <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={tile.img} alt="" />
            </GridListTile>
          })}
        </GridList>
      </div>
    );
  }
}