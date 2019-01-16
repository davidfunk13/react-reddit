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
    this.setState({ isOpen: true,
    current:{
      img: img,
      title: title,
    } });
  };
  handleClose = () => {
    this.setState({isOpen: false});
  }

  render() {
    const { classes } = this.props.store;
    const posts = this.props.posts.filter(post => post.kind === 't3' && (post.data.url.includes('gif') || post.data.url.includes('jpg') || post.data.url.includes('jpeg') || post.data.url.includes('png')))
    console.log(posts)
    // Variables.

    // List of objects.
    var list = [];
    function Tile(img, title, author, cols) {
      this.img = img;
      this.title = title;
      this.author = author;
      this.cols = cols || Math.floor((Math.random() * 2) + 1);
      list.push(this);
    }
    posts.map(post => {
      return new Tile(post.data.url, post.data.title, post.data.author)
    })
    console.log(list)

    // const tileData = [
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 3,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 2,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 3,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 3,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 2,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 1,
    //   },
    //   {
    //     img: thumb,
    //     title: 'Image',
    //     author: 'author',
    //     cols: 3,
    //   }
    // ]
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.isOpen}
          onClose={this.handleClose}
        >
       <img src={this.state.current.img} alt={this.state.current.title}/>
        </Modal>
        <GridList className={classes.gridList} cols={4}>
          {list.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols}>
              <img onClick={()=>{this.handleOpen(tile.img, tile.title)}} src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}