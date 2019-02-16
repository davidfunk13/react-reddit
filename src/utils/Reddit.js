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
        return axios.get(`https://oauth.reddit.com/user/${user}/saved?raw_json=1`, { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => {
                console.log(err.response);
                return err.response
            });
    },
    sortPosts: (post, props, isModal) => {
        console.log(isModal)
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
                return (
                <Video key={post.data.id} post={post} {...props} />
                );
            } else {
                return <Image key={post.data.id} post={post} {...props} />
            }
        }
        if (("url" in post.data)) {
            let isImage = false;
            fileExtension = post.data.url.lastIndexOf('.');
            fileExtension = post.data.url.substr(fileExtension + 1);
            extensions.map(ext => {
                if (ext === fileExtension && isImage !== true) {
                    return isImage = true;
                } else {
                    return 'else'
                }
            })
            if (isImage === true) {
                return <Image key={post.data.id} post={post} {...props} />
            } else {
                return <Link key={post.data.id} post={post} {...props} />
            }
        }
        console.log(post);
    },
    gridSort: (posts) => {
        let images = [];
        let gfycat = [];
        let redditVideo = [];
        let youtube = [];
        let gifv = [];
        let allPosts = [];
        let uncaught = [];
        let extensions = ['gifv', 'gif', 'jpg', 'jpeg', 'png'];
        let fileExtension;
        posts.map(post => {
            let caught = false;
            if (post.data.domain === 'gfycat.com') {
                caught = !caught
                return (
                    allPosts = [...allPosts, {...post, type: 'gfycat'}],
                    gfycat = [...gfycat, {...post, type: 'gfycat'}]
                )
            }
            if (post.data.domain.includes('imgur')) {
                if (post.data.url.includes('gifv')) {
                    caught = !caught;
                    return (allPosts = [...allPosts, {...post, type: 'gifv'}], gifv = [...gifv, {...post, type: 'gifv'}]);
                } else {
                    caught = !caught;
                    return (allPosts = [...allPosts, {...post, type: 'image'}], images = [...images, {...post, type: 'image'}]);
                }
            };
            let isImage = false;
            fileExtension = post.data.url.lastIndexOf('.');
            fileExtension = post.data.url.substr(fileExtension + 1);
            extensions.map(ext => {
                if (ext === fileExtension && isImage !== true) {
                    return isImage = true;
                } else {
                    return 'not an extension match'
                }
            })

            if (isImage === true) {
                caught = !caught;
                return (allPosts = [...allPosts, {...post, type: 'image'}], images = [...images, {...post, type:'image'}]);
            }
            if (post.data.post_hint && post.data.post_hint === 'rich:video') {
                if (post.data.domain === 'youtube.com' || post.data.domain === 'youtu.be') {
                    caught = !caught;
                    return (allPosts = [...allPosts, {...post, type: 'youtube'}], youtube = [...youtube, {...post, type: 'youtube'}]);
                }
            }

            if (post.data.post_hint && post.data.post_hint === 'hosted:video') {
                caught = !caught
                return (allPosts = [...allPosts, {...post, type: 'redditVideo'}], redditVideo = [...redditVideo, {...post, type: 'redditVideo'}]);
            } else if (post.data.domain === 'v.redd.it') {
                caught = !caught;
                return (allPosts = [...allPosts, {...post, type: 'redditVideo'}], redditVideo = [...redditVideo, {...post, type: 'redditVideo'}]);
            };

            if (caught === false) {
                caught = !caught;
               return uncaught = [...uncaught, {...post, type: 'uncaught'}];
            }
            return 'löööööööööööps brotha'
        })
        let media = {
            allPosts: allPosts,
            gfycat: gfycat,
            redditVideo: redditVideo,
            youtube: youtube,
            images: images,
            gifv: gifv
        }
        return media;
    },

}