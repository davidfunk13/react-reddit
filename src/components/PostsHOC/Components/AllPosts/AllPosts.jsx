import React, { Component } from 'react';

import { Paper, Typography, Grid, Avatar } from '@material-ui/core';

export default class AllPosts extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { posts } = this.props
        const { classes, classNames } = this.props.store
        return (
            posts.map(post => {
                switch (post.kind) {
                    case 't1':
                        return (
                            <Paper key={post.data.id} className={classes.paper}>
                                        <Avatar>A</Avatar>
                                        <Typography>
                                            {post.data.author}
                                        </Typography>
                            </Paper>
                        )
                    case 't3':
                        return (
                            <Paper key={post.data.id} className={classes.paper}>
                                        <Avatar>A</Avatar>
                                        <Typography>
                                            {post.data.author}
                                        </Typography>
                            </Paper>
                        )
                    default:
                        return 'something went wrong!'
                }
            })
        )
    }
}
