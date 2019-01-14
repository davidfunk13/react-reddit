import React, { Component } from 'react';
import { postFunctions } from '../../utils/Reddit';
import { AllPosts, LinkPosts, CommentPosts } from './Components/index';


export default class PostsHOC extends Component {
    state = {
        showType: 'all',
    }
    componentDidMount() {
        console.log(this.props)
    }

    displayPostsOfType() {
        switch (this.state.showType) {
            case 'all':
                return <AllPosts posts={this.props.posts} {...this.props} />
            case 'comments':
                let comments = this.props.posts.filter(post => post.kind === 't1');
                return <CommentPosts posts={comments} {...this.props} />
            case 'link':
                let links = this.props.posts.filter(post => post.kind === 't3');
                return <LinkPosts posts={links} {...this.props} />
            default:
                break;
        }
    }
    render() {
        return (
            <div className='post-container'>
                <button onClick={() => this.setState({ showType: 'all' })}>All</button>
                <button onClick={() => this.setState({ showType: 'comments' })}>Comments</button>
                <button onClick={() => this.setState({ showType: 'link' })}>Links</button>
                <div>
                    {this.state.showType}
                    <div className='post-container--window'>
                    {this.displayPostsOfType()}
                    </div>
                </div>
            </div>

        )
    }
}