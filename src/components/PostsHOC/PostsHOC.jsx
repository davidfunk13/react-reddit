import React, { Component } from 'react';
import { AllPosts, LinkPosts, CommentPosts, ImagePosts } from './Components/index';
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
            <Grid justify="center" container>
                <Grid item>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="All" />
                        {/* <Tab label="Comments" />
                        <Tab label="Links" />
                        <Tab label="Images" /> */}
                    </Tabs>
                </Grid>
                <Grid className={classes.posts} justify="center" container>
                    <Grid item>
                        {value === 0 && <AllPosts {...this.props} />}
                        {value === 1 && <CommentPosts {...this.props} />}
                        {value === 2 && <LinkPosts {...this.props} />}
                        {value === 3 && <ImagePosts  {...this.props} />}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}