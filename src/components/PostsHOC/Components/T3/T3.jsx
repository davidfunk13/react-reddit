import React, { Component } from 'react';

export default class T3 extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className='post-container'>
            <p>{this.props.post.data.post_hint}</p>
            </div>

        )
    }
}