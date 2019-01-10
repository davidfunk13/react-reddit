import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Reddit } from '../../utils/Reddit';
import PostsHOC from '../PostsHOC/PostsHOC';
export default class Saved extends Component {
    state = {
        saved: []
    }
    componentDidMount() {
        if (this.props.user) {
            Reddit.fetchSaved(this.props.user.data.name, sessionStorage.getItem('t')).then(response => {
                this.setState({ saved: response.data.data.children })
            });
        }

    }
    render() {
        return (
            <div>
                <p>Saved</p>
                <div>
                    {this.state.saved.length ? <PostsHOC posts={this.state.saved}/> : <div>Loading...</div>}
                </div>
                <Link to="/">Back</Link>
            </div>
        )
    }
}