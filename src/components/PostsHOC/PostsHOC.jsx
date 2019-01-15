import React, { Component } from 'react';
import { AllPosts, LinkPosts, CommentPosts } from './Components/index';
import { Tabs, Tab, Typography, Grid, Paper } from '@material-ui/core';


export default class PostsHOC extends Component {

    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        const { classes } = this.props.store;
        return (
            <div>
<Grid justify={"center"}container>
                <Tabs centered value={value} onChange={this.handleChange}>
                    <Tab label="All Posts" />
                    <Tab label="Comments" />
                    <Tab label="Links" />
                </Tabs>
</Grid>
                {value === 0 && <AllPosts posts={this.props.posts} {...this.props} />}
                {value === 1 && <CommentPosts posts={this.props.posts.filter(post => post.kind === 't1')} {...this.props} />}
                {value === 2 && <LinkPosts posts={this.props.posts.filter(post => post.kind === 't3')} {...this.props} />}
            </div>
            // <Paper  className={classes.root}>
            // </Paper>
        )
    }
}