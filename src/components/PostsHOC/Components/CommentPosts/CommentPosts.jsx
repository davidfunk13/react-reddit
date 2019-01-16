import React, { Component } from 'react';
import { Paper, Typography, Grid, Avatar, Card, CardMedia } from '@material-ui/core';
import thumb from '../AllPosts/thumb.png'
export default class CommentPosts extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { posts } = this.props
        const { classes, classNames } = this.props.store
        return (
                posts.map(post => {
                    return (
                        <Paper key={post.data.id} className={classes.paper} elevation={4}>
                        <Card className={classes.postCard}>
                            <CardMedia className={classes.postThumb} image={thumb}>

                            </CardMedia>
                        </Card>
                       </Paper>
                    )
                })
        )
    }
}