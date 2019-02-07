import React, { Component } from 'react';
import ImageGrid from './Components/ImageGrid/ImageGrid';

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
  render() {
    const posts = this.props.posts.filter(post => post.kind === 't3' &&( post.data.post_hint === 'image' || 'hosted:video'|| 'rich:video'))
    console.log(posts)
    return <ImageGrid tileData={this.getPostsWithColumns(posts)} {...this.props} />
  }
}