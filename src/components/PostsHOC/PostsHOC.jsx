import React, { Component } from 'react';
import T3 from './Components/T3/T3'
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
    
    displayPostsOfType(post) {
        // switch (post.kind) {
        //     case 't1':
        //         this.setState({all: [...state.all, post]});
        //         break;
        
        //     default:
        //         break;
        // }
    }
    render() {
        return (
            <div className='post-container'>
                <button onClick={()=>this.setState({ showType: 'all' })}>All</button>
                <button onClick={()=>this.setState({ showType: 'comments' })}>Comments</button>
                <button onClick={()=>this.setState({ showType: 'posts' })}>Posts</button>
                <div>

                </div>
            </div>

        )
    }
}