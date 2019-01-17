import React, { Component } from 'react';
import { GridList, GridListTile, Modal } from '@material-ui/core';
import thumb from '../AllPosts/thumb.png'

export default class ImageGridList extends Component {
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

  render() {
    const { classes } = this.props.store;
    const posts = this.props.posts.filter(post => post.kind === 't3' && (post.data.url.includes('gif') || post.data.url.includes('jpg') || post.data.url.includes('jpeg') || post.data.url.includes('png')))
    let list = [];
    posts.map(post => {
      let tile = {
        img: post.data.url,
        cols: Math.floor((Math.random() * 2) + 1)
      }
      list.push(tile);
    });
    return (
      <div>
        <GridList className={classes.gridList} cols={3}>
          {list.map((tile, index) => { 
            function ensureGrid() {
              if (index !== 0){
                console.log('hit')
                console.log(list[index-1])
                // if (tile[index - 1].cols === 2){
                //   console.log('previos tile was 2')
                // }
              }
            }
            ensureGrid()
              return <GridListTile key={tile.img} cols={tile.cols}>
                <img src={tile.img || thumb} alt=""/>
               </GridListTile>
          })}
        </GridList>
      </div>
    );
  }
}