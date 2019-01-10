import React, { Component } from 'react';
import T3 from './Components/T3/T3';
import {postFunctions} from '../../utils/Reddit';

export default class PostsHOC extends Component {
    state = {
        showType: 'all',
        all: [],
        comments: [],
        links: [],
    }
    componentDidMount() {
        console.log(this.props.posts)
    }

    displayPostsOfType() {
        switch (this.state.showType) {
            case 'all':
                return postFunctions.allTypes(this.props.posts);
            case 'comments':
                let comments = this.props.posts.filter(post => post.kind === 't1');
                return postFunctions.returnComments(comments);
            case 'link':
                let links = this.props.posts.filter(post => post.kind === 't3');
                return postFunctions.returnLinks(links);
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
                    {this.displayPostsOfType()}
                </div>
            </div>

        )
    }
}