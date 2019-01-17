import React, { Component } from 'react';
import ImageGrid from './Components/ImageGrid/ImageGrid';
let tileData = []
export default class ImagePosts extends Component {


  makeTiles() {
    const posts = this.props.posts.filter(post => post.kind === 't3' && (post.data.url.includes('gif') || post.data.url.includes('jpg') || post.data.url.includes('jpeg') || post.data.url.includes('png')))
    let randomStart = Math.floor((Math.random() * 3) + 1);

    function Tile(img, title, cols) {
      this.img = img;
      this.title = title;
      this.cols = cols;
    };

    posts.map((post, i) => {
      let nextTile;
      if (i === 0) {
        let firstTile = new Tile(post.data.url, post.data.title, randomStart);
        tileData.push(firstTile);
        return;
      } else {
      }


     


    })


  }

  render() {
    this.makeTiles()
    console.log(tileData)
    return (
      <div>

        open grid when i can get tileData figured out.
        {/* <ImageGrid tileData={this.makeTiles()} {...this.props}/> */}
      </div>
    );
  }
}