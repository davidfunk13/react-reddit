import React, { Component } from 'react';
import { AllPosts, LinkPosts, CommentPosts } from './Components/index';
import { Tabs, Tab} from '@material-ui/core';


export default class PostsHOC extends Component {
    state = {
        value: 0,
    }
    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className='post-container'>

                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="All Posts" />
                    <Tab label="Comments" />
                    <Tab label="Links" />
                </Tabs>
                <div>
                {value === 0 && <AllPosts posts={this.props.posts} {...this.props} />}
                {value === 1 && <CommentPosts posts={this.props.posts.filter(post => post.kind === 't1')} {...this.props} />}
                {value === 2 && <LinkPosts posts={this.props.posts.filter(post => post.kind === 't3')} {...this.props} />}
                </div>
            </div>

        )
    }
}