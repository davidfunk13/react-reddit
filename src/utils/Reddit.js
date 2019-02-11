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
        let wasPostCaught = false;
        let post1 = {
            domain: post.data.domain,
            url: post.data.url,
            post_hint: post.post_hint,
            body: post.data.body
        };
        if (post1.body) {
           wasPostCaught = !wasPostCaught
            return <Comment post={post} {...props} />
        }
        if (post1.domain.includes('gfycat')) {
            wasPostCaught = !wasPostCaught
            return <Video post={post} {...props} />;
        }
        if (post1.domain.includes('imgur')) {
            if (post1.url.includes('gifv')) {
                wasPostCaught = !wasPostCaught
                return <Video post={post} {...props} />;
            } else {
                wasPostCaught = !wasPostCaught
                return <Image post={post} {...props} />
            }
        }
        return wasPostCaught ? null : <Link post={post} {...props}/>
        // console.log(post.data);
        // let extensions = ['gifv', 'gif', 'jpg', 'jpeg', 'png'];
        // let fileExtension;
        // if (post.data.domain && post.data.domain.includes('gfycat')) {
        //     return <Video key={post.data.id} post={post} {...props} />
        // }
        // //checks if domain is imgur, then checks if its a video. else returns as image.
        // if (post.data.domain && post.data.domain.includes('imgur')) {
        //     if (post.data.url.includes('gifv')) {
        //         return <Video key={post.data.id} post={post} {...props} />
        //     } else {
        //         return <Image key={post.data.id} post={post} {...props} />
        //     }
        // }
        // // for all posts not under the imgur domain, if the url key is present, check the file extension. return if its an image.
        // if (("url" in post.data)) {
        //     fileExtension = post.data.url.lastIndexOf('.');
        //     fileExtension = post.data.url.substr(fileExtension + 1);
        //     return extensions.map(ext => {
        //         if (ext === fileExtension) {
        //             return <Image key={post.data.id} post={post} {...props} />
        //         }
        //     })

        // }

        // //comment post 1
        // if (("body" in post.data)) {
        //     console.log(post.data.body)
        //     return <Comment key={post.data.id} post={post} {...props} />
        // }
    }
}