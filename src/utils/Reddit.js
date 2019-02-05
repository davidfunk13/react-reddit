import axios from 'axios';
import React from 'react';
import { Comment, Link, Image, Video } from '../components/PostsHOC/Components/Posts';
export const Reddit = {
    masterUser: (token) => {
        return axios.get('https://oauth.reddit.com/api/v1/me', { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => {
                return err.response
            });
    },
    fetchSaved: (user, token) => {
        return axios.get(`https://oauth.reddit.com/user/${user}/saved`, { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => {
                console.log(err.response);
                return err.response
            });
    },
    sortPosts: (post, props) => {
        switch (post.kind) {
            case 't1': return (
                <Comment post={post} {...props} />
            )
            case 't3':
                if (post.data.post_hint === 'image') {
                    return (
                        <Image post={post} {...props} />
                    )
                } else if (post.data.post_hint === 'link') {
                    return (
                        <Link post={post} {...props} />
                    )
                } else if (post.data.post_hint === 'rich:video' || 'hosted:video') {
                    return (
                        <Video post={post} {...props} />
                    )
                }
            default: return 'something went wrong'
        }
    }

}