import { Component } from 'react';
import { Reddit } from '../../../../../../utils/Reddit';

export default class SelectedPost extends Component {
    render() {
        const {post} = this.props.postData;
        return Reddit.sortPosts(post, this.props, true);
    }
}