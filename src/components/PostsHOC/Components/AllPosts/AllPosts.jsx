import React, { Component } from 'react';
import {Reddit} from '../../../../utils/Reddit.js';

import thumb from '../../assets/img/thumb.png'

export default class AllPosts extends Component {
    renderThumb = (thumbData) => {
        switch (thumbData) {
            case 'self':
                return thumb
            case 'default':
                return thumb
            default:
                return thumbData;
        }
    }
    render() {
        const { posts } = this.props;
        return (
            <div>
                {posts.map((post, index) => {
                    return Reddit.sortPosts(post, this.props);
                })}
            </div>
        )
    }
}
