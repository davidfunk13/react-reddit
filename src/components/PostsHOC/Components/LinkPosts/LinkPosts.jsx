import React, { Component } from 'react';
import { Paper, Typography, Grid, Avatar } from '@material-ui/core';
export default class LinkPost extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { posts } = this.props
        const { classes, classNames } = this.props.store
        return (
            <Grid>
                {posts.map(post => {
                    return (
                        <Paper className={classes.paper} key={post.data.id} >
                            <Grid container spacing={16}>
                                <Grid item>
                                    <Avatar>Link</Avatar>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })}
            </Grid>


        )
    }
}