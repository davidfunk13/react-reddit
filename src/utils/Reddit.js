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
        console.log(post.data.domain)
        switch(post.kind){
            case 't1':
            return;
            case 't3':
            if (post.data.is_reddit_media_domain){
                //is
                return
            } else{
                //isnot
                if(post.data.is_self){
                    return 
                } else if (post.data.post_hint){
                    return console.log(post.data.)
                    
                } else{
                    return console.log({post: post.data, domain: post.data.domain, title: post.data.title, url: post.data.url, } )
                }
            }
            //if has post hint
            // if (post.data.post_hint !== undefined){
            //     //edge case for if it has a hint, but its also a self post.
            //     if (post.data.post_hint === 'self'){
            //         //return as you would a self post
            //         return 
            //     } else{
            //         //do something with post hint depending on type
            //         return
            //     }
            // } else {
            // //has no post hint.
            // //is it a self post?
            //     if (post.data.is_self){
            //         return
            //     } else {
            //         //what is it?
            //         if (post.data.domain === 'i.redd.it'){
            //             console.log(post)
            //         } else{

            //             return console.log(post.data.domain)
            //         }
            //     }
            // }
            default: return 'something went wrong'
        }
    }
}