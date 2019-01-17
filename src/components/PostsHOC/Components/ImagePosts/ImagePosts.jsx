import React, { Component } from 'react';
import { GridList, GridListTile, Modal } from '@material-ui/core';
import thumb from '../AllPosts/thumb.png'
let list = [];

export default class ImageGridList extends Component {
  state = {
    isOpen: false,
    current: {
      img: '',
      title: ''
    },
    tiles: [],
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
    const posts = this.props.posts.filter(post => post.kind === 't3' && (post.data.url.includes('gif') || post.data.url.includes('jpg') || post.data.url.includes('jpeg') || post.data.url.includes('png')))
    let prevCols = null;
    let tile;
    posts.map((post, index) => {
      if (index === 0) {
        tile = {
          img: post.data.url,
          title: '',
          cols: Math.floor((Math.random() * 3) + 1)
        }
        prevCols = tile.cols;
        list.push(tile);
        return;
        console.log(`prevCols now set to ${prevCols}`)
      }
      if(prevCols !== null){
        console.log(prevCols)
        if(3-prevCols !== 0){
          tile = {
            img: post.data.url,
            title: '',
            cols: 3 - prevCols
          };
          prevCols = tile.cols;
          list.push(tile);
          return;
        }
        if (3-prevCols === 0){
          tile = {
            img: post.data.url,
            title: '',
            cols:  Math.floor((Math.random() * 3) + 1)
          }
          prevCols = tile.cols;
          list.push(tile);
          return;
        }
      }
    });
    return (
      <div>
        <GridList className={classes.gridList} cols={3}>
          {list.map((tile, index) => {
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