import axios from 'axios';
import React from 'react';
import { Comment, Link, Image, Video } from '../components/PostsHOC/Components/AllPosts/Components/Posts/index';

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
        let extensions = ['gifv', 'gif', 'jpg', 'jpeg', 'png'];
        let fileExtension;
        let post1 = {
            domain: post.data.domain,
            url: post.data.url,
            post_hint: post.post_hint,
            body: post.data.body
        };
        if (post1.body) {
            return <Comment key={post.data.id} post={post} {...props} />
        }
        if (post1.domain.includes('gfycat')) {
            return <Video key={post.data.id} post={post} {...props} />;
        }
        if (post1.domain.includes('imgur')) {
            if (post1.url.includes('gifv')) {
                return <Video key={post.data.id} post={post} {...props} />;
            } else {
                return <Image key={post.data.id} post={post} {...props} />
            }
        }
        if (("url" in post.data)) {
            fileExtension = post.data.url.lastIndexOf('.');
            fileExtension = post.data.url.substr(fileExtension + 1);
            return extensions.map(ext => {
                if (ext === fileExtension) {
                    return <Image key={post.data.id} post={post} {...props} />
                }
            })
        }
        console.log(post);
    }
}