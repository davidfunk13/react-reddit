import React, { Component } from 'react';

export default class CommentPosts extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    
    render() {
        return (
            <div className='post-container'>
            {this.props.posts}
            </div>

        )
    }
}