import React, { Component } from 'react';

import { Paper, Typography, Grid, Avatar } from '@material-ui/core';

export default class AllPosts extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { posts } = this.props
        const {classes, classNames} = this.props.store
        return (
                posts.map(post => {
                    switch (post.kind) {
                        case 't1':
                            return (
                                <Paper key={post.data.id} className={classes.paper}>
                                    <Grid container spacing={16}>
                                        <Grid item>
                                            <Avatar>A</Avatar>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        case 't3':
                            return (
                                <Paper key={post.data.id} className={classes.paper}>
                                    <Grid container spacing={16}>
                                        <Grid item>
                                            <Avatar>A</Avatar>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        default:
                            return 'something went wrong!'
                    }
                })
        )
    }
}
