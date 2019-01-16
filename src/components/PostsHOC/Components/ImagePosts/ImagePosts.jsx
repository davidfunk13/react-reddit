import React, { Component } from 'react';
import { GridList, GridListTile} from '@material-ui/core';
import thumb from '../AllPosts/thumb.png'

export default function ImageGridList(props) {
    const { classes } = props.store;
    const tileData = [
           {
             img: thumb,
             title: 'Image',
             author: 'author',
             cols: 3,
           },
           {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 2,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 3,
          },
          {
             img: thumb,
             title: 'Image',
             author: 'author',
             cols: 3,
           },
           {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 2,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 1,
          },
          {
            img: thumb,
            title: 'Image',
            author: 'author',
            cols: 3,
          }
        ]
    return (
      <div>
        <GridList cellHeight={90} className={classes.gridList} cols={4}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }