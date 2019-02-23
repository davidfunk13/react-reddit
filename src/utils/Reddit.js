import axios from 'axios';
import React from 'react';
import { Comment as CommentCard, Link as LinkCard, Image as ImageCard, Video } from '../components/PostsHOC/Components/AllPosts/Components/Posts/index';
import { Comment, Gfycat, Link, GifVideo, Image, RedditVideo, Youtube } from '../components/PostsHOC/Components/ContentTypes/index';
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
            return needsConversion ? <Comment key={post.data.id} comment={post.data.body} author={post.data.author} {...props} /> : <CommentCard key={post.data.id} type={'comment'} post={post} {...props} />
        }
        if (post1.domain.includes('gfycat')) {
            return needsConversion ? <Gfycat key={post.data.id} title={post.data.title} embed={post.data.media} {...props} /> : <Video type={'video'} key={post.data.id} post={post} {...props} />
        }
        if (post1.domain.includes('imgur')) {
            if (post1.url.includes('gifv')) {
                return needsConversion ? <GifVideo key={post.data.id} post={post} url={post.data.url.replace('gifv', 'mp4')} thumb={thumb} {...props} /> : <Video key={post.data.id} type={'video'} post={post} {...props} />
            } else {
                return needsConversion ? <Image key={post.data.id} url={post.data.url} title={post.data.title} {...props} /> : <ImageCard key={post.data.id} type={'image'} post={post} {...props} />
            }
        }
        if (post1.domain.includes('v.redd.it')) {
            return needsConversion ? <RedditVideo title={post.data.title} url={post.data.secure_media.reddit_video.fallback_url} {...props} /> : <LinkCard key={post.data.id} type={'redditVideo'} post={post} {...props} />
            
        }
        if (post1.domain.includes('youtube') || post1.domain.includes('youtu.be')) {
            return needsConversion ? <Youtube thumbnail={post} url={post.data.media.oembed.html} title={post.data.title} {...props} /> : <LinkCard key={post.data.id} type={'youtube'} post={post} {...props} />
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
                return needsConversion ? <Image key={post.data.id} url={post.data.url} title={post.data.title} {...props} /> : <ImageCard key={post.data.id} type={'image'} post={post} {...props} />
            } else {
                return needsConversion ? <Link key={post.data.id} title={post.data.title} url={post.data.url} {...props} /> : <LinkCard key={post.data.id} type={'image'} post={post} {...props} />
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
                let thumb = post.data.preview.images[0].resolutions[1].url;
                caught = !caught
                return (
                    allPosts = [...allPosts, { ...post, type: 'gfycat', thumb: thumb }],
                    gfycat = [...gfycat, { ...post, type: 'gfycat', thumb: thumb }]
                )
            }
            if (post.data.domain.includes('imgur')) {
                if (post.data.url.includes('gifv')) {
                    let thumb = post.data.preview.images[0].resolutions[1].url;
                    caught = !caught;
                    return (allPosts = [...allPosts, { ...post, type: 'gifv', thumb: thumb }], gifv = [...gifv, { ...post, type: 'gifv', thumb: thumb }]);
                } else {
                    let thumb = post.data.url;
                    caught = !caught;
                    return (allPosts = [...allPosts, { ...post, type: 'image', thumb: thumb }], images = [...images, { ...post, type: 'image', thumb: thumb }]);
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
                let thumb = post.data.url;
                caught = !caught;
                return (allPosts = [...allPosts, { ...post, type: 'image', thumb: thumb }], images = [...images, { ...post, type: 'image', thumb: thumb }]);
            }
            if (post.data.post_hint && post.data.post_hint === 'rich:video') {
                if (post.data.domain === 'youtube.com' || post.data.domain === 'youtu.be') {
                    let { oembed } = post.data.media;
                    let thumb = oembed.thumbnail_url;
                    caught = !caught;
                    return (allPosts = [...allPosts, { ...post, type: 'youtube', thumb: thumb }], youtube = [...youtube, { ...post, type: 'youtube', thumb: thumb }]);
                }
            }

            if (post.data.post_hint && post.data.post_hint === 'hosted:video') {
                let thumb = post.data.preview.images[0].resolutions[1].url;
                caught = !caught
                return (allPosts = [...allPosts, { ...post, type: 'redditVideo', thumb: thumb }], redditVideo = [...redditVideo, { ...post, type: 'redditVideo', thumb: thumb }]);
            } else if (post.data.domain === 'v.redd.it') {
                caught = !caught;
                return (allPosts = [...allPosts, { ...post, type: 'redditVideo', thumb: thumb }], redditVideo = [...redditVideo, { ...post, type: 'redditVideo', thumb: thumb }]);
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