import React, { Component } from 'react';
import { Paper, Typography, Grid, Card, CardMedia } from '@material-ui/core';
import thumb from '../../assets/img/thumb.png'
import { Link } from '../Posts';
export default class LinkPost extends Component {
    componentDidMount() {

    }

    render() {
        const posts = this.props.posts.filter(post => post.kind === 't3');
        return (
            posts.map(post => {
                return <Link key={post.data.id} post={post} {...this.props} />
            })
        )
    }
}