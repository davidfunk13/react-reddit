import React, { Component } from 'react';
import thumb from '../../../../assets/img/thumb.png'
import { Reddit } from '../../../../../../utils/Reddit';
import { Comment, Link, Image, Video } from '../Posts/index';

export default class SelectedPost extends Component {
    componentDidMount() {
        console.log(this.props.postData.post.type)
        console.log(this.props.postData.post.url)
    }
    render() {
        const { classes } = this.props.store;
        const { type } = this.props.postData.post;
        return (
            <div>
                <div className={classes.modalText}>
                    {type === 'link' ?
                        <div>link</div>
                        : type === 'image' ?
                        <div>image</div>
                            : type === 'gfycat' ?
                            <div>gfycat</div>
                                : type === 'gifv' ?
                                <div>gifv</div>
                                    :
                                    type === 'comment' ?
                                    <div>comment</div>
                                        :
                                        type === "redditVideo" ?
                                        <div>redditVideo</div>
                                            :
                                            null}
                    <button onClick={() => this.props.toggleModal()}>Toggle</button>
                </div>
            </div>
        );
    }
}