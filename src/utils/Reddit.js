import axios from 'axios';
import React from 'react';
import { Comment as CommentCard, Link as LinkCard, Image as ImageCard, Video } from '../components/PostsHOC/Components/AllPosts/Components/Posts/index';
import { Comment, Gfycat, Link, GifVideo, Image, RedditVideo } from '../components/PostsHOC/Components/ContentTypes/index';
import thumb from '../components/PostsHOC/assets/img/thumb.png'


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
    sortPosts: (post, props, needsConversion) => {
        let extensions = ['gifv', 'gif', 'jpg', 'jpeg', 'png'];
        let fileExtension;
        let post1 = {
            domain: post.data.domain,
            url: post.data.url,
            post_hint: post.post_hint,
            body: post.data.body
        };
        if (post1.body) {
            return (
                needsConversion ?
                    <Comment key={post.data.id} comment={post.data.body} author={post.data.author} {...props} />
                    :
                    <CommentCard key={post.data.id} type={'comment'} post={post} {...props} />
            )
        }
        if (post1.domain.includes('gfycat')) {
            return (
                needsConversion ?
                    <Gfycat key={post.data.id} title={post.data.title} embed={post.data.media} {...props} />
                    :
                    <Video type={'video'} key={post.data.id} post={post} {...props} />
            )
        }
        if (post1.domain.includes('imgur')) {
            if (post1.url.includes('gifv')) {
                return (
                    needsConversion ?
                        <GifVideo key={post.data.id} post={post} url={post.data.url.replace('gifv', 'mp4')} thumb={thumb} {...props} />
                        :
                        <Video key={post.data.id} type={'video'} post={post} {...props} />
                );
            } else {
                return (
                    needsConversion ?
                        <Image key={post.data.id} url={post.data.url} title={post.data.title} {...props} />
                        :
                        <ImageCard key={post.data.id} type={'image'} post={post} {...props} />
                )
            }
        }
        if (post1.domain.includes('v.redd.it')) {
            return (
                needsConversion ? <RedditVideo url={post.data.secure_media.reddit_video.fallback_url} {...props}/> : <LinkCard key={post.data.id} type={'redditVideo'} post={post} {...props} />
            )
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

                return (
                    needsConversion ?
                        <Image key={post.data.id} url={post.data.url} title={post.data.title} {...props} />
                        :
                        <ImageCard key={post.data.id} type={'image'} post={post} {...props} />
                )
            } else {
                return (
                    needsConversion ? <Link key={post.data.id} title={post.data.title} url={post.data.url} {...props} /> : <LinkCard key={post.data.id} type={'image'} post={post} {...props} />
                )
            }
        }
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
                    allPosts = [...allPosts, { ...post, type: 'gfycat' }],
                    gfycat = [...gfycat, { ...post, type: 'gfycat' }]
                )
            }
            if (post.data.domain.includes('imgur')) {
                if (post.data.url.includes('gifv')) {
                    caught = !caught;
                    return (allPosts = [...allPosts, { ...post, type: 'gifv' }], gifv = [...gifv, { ...post, type: 'gifv' }]);
                } else {
                    caught = !caught;
                    return (allPosts = [...allPosts, { ...post, type: 'image' }], images = [...images, { ...post, type: 'image' }]);
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
                return (allPosts = [...allPosts, { ...post, type: 'image' }], images = [...images, { ...post, type: 'image' }]);
            }
            if (post.data.post_hint && post.data.post_hint === 'rich:video') {
                if (post.data.domain === 'youtube.com' || post.data.domain === 'youtu.be') {
                    caught = !caught;
                    return (allPosts = [...allPosts, { ...post, type: 'youtube' }], youtube = [...youtube, { ...post, type: 'youtube' }]);
                }
            }

            if (post.data.post_hint && post.data.post_hint === 'hosted:video') {
                caught = !caught
                return (allPosts = [...allPosts, { ...post, type: 'redditVideo' }], redditVideo = [...redditVideo, { ...post, type: 'redditVideo' }]);
            } else if (post.data.domain === 'v.redd.it') {
                caught = !caught;
                return (allPosts = [...allPosts, { ...post, type: 'redditVideo' }], redditVideo = [...redditVideo, { ...post, type: 'redditVideo' }]);
            };

            if (caught === false) {
                caught = !caught;
                return uncaught = [...uncaught, { ...post, type: 'uncaught' }];
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