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
        if (("url" in post.data)) {
            fileExtension = post.data.url.lastIndexOf('.');
            fileExtension = post.data.url.substr(fileExtension + 1);
         return extensions.map(ext => {
                if (ext === fileExtension) {
                    console.log(post)
                    return <Image post={post} {...props} />
                }
            })
        } else {
            //catch domains with no ext for gifs
            console.log('not image');
        }
    }
}