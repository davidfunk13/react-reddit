import React, { Component } from 'react';
import ImageGrid from './Components/ImageGrid/ImageGrid';
import { Reddit } from '../../../../utils/Reddit.js'

export default class ImagePosts extends Component {
  randomNumber = (ceiling) => {
    return Math.floor(Math.random() * ceiling + 1);
  }
  totalColumns = (arr) => {
    let columns = 0;
    arr.forEach(({ cols }) => columns += cols)
    return columns;
  }
  getPostsWithColumns = (posts) => {
    const postsWithColumns = posts.reduce((accum, post) => {
      const lastIndex = accum.length - 1;
      if (accum[lastIndex] && this.totalColumns(accum[lastIndex]) < 3) {
        const currentTotal = this.totalColumns(accum[lastIndex]);
        const postWithCols = {
          ...post,
          cols: currentTotal === 2 ? 1 : this.randomNumber(2)
        };
        accum[lastIndex] = [...accum[lastIndex], postWithCols];
        return accum;
      }
      const postWithCols = {
        ...post,
        cols: this.randomNumber(3)
      }
      return [...accum, [postWithCols]];
    }, []);
    return postsWithColumns.reduce((accum, group) => [...accum, ...group], []);
  };
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    const posts = this.props.posts.filter(post => post.kind === 't3');
    let mediaOnly = Reddit.gridSort(posts);
    let randomizeMedia = this.shuffle(mediaOnly.allPosts);
    return (<ImageGrid
    allPosts={this.getPostsWithColumns(mediaOnly.allPosts)}
      gfycat={this.getPostsWithColumns(mediaOnly.gfycat)}
      images={this.getPostsWithColumns(mediaOnly.images)}
      gifv={this.getPostsWithColumns(mediaOnly.gifv)}
      redditVideo={this.getPostsWithColumns(mediaOnly.redditVideo)}
      youtube={this.getPostsWithColumns(mediaOnly.youtube)}
      randomizeTiles={this.getPostsWithColumns(randomizeMedia)}
      {...this.props}
    />)
  }
}