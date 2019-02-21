import { Component } from 'react';
import {Reddit} from '../../../../../../utils/Reddit.js'
export default class SelectedLink extends Component {

    render() {
        const { post } = this.props.postData;
        return Reddit.sortPosts(post, this.props, true);
    }
}