import React, { Component } from 'react';
import { GridList, GridListTile, Modal } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png'

export default class ImageGrid extends Component {
  state = {
    isOpen: false,
    current: {
      img: '',
      title: ''
    }
  }
  componentDidMount() {
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
    

    return (
      <div>
        <GridList className={classes.gridList} cols={3}>
          {posts.map((tile, index) => {
            console.log(tile)
            return <GridListTile key={tile.data.url} cols={tile.cols}>
              <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={tile.data.url} alt="" />
            </GridListTile>
          })}
        </GridList>
      </div>
    );
  }
}