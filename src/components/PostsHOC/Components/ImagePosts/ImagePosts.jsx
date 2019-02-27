import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
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

  render() {
    const posts = this.props.posts.filter(post => post.kind === 't3');
    let mediaOnly = Reddit.gridSort(posts);
    return (
      <Grid container direction={'column'} alignContent={"center"} alignItems={'center'}>
        <Grid item>
          <ImageGrid
            allPosts={this.getPostsWithColumns(mediaOnly.allPosts)}
            gfycat={this.getPostsWithColumns(mediaOnly.gfycat)}
            images={this.getPostsWithColumns(mediaOnly.images)}
            gifv={this.getPostsWithColumns(mediaOnly.gifv)}
            redditVideo={this.getPostsWithColumns(mediaOnly.redditVideo)}
            youtube={this.getPostsWithColumns(mediaOnly.youtube)}
            {...this.props}
          />
        </Grid>
      </Grid>
    )
  }
}