import { Component } from 'react';
import { Reddit } from '../../../../../../utils/Reddit';

export default class SelectedImage extends Component {
    render() {
        const {post} = this.props;
        return Reddit.sortPosts(post, this.props, true);
    }
}