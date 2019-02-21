import { Component } from 'react';
import { Reddit } from '../../../../../../utils/Reddit';

export default class SelectedComment extends Component {
    
    render() {
        return Reddit.sortPosts(this.props.post, this.props, true);
    }
}