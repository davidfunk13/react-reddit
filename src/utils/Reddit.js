import React from 'react'
import axios from 'axios';

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
    }
}

export const postFunctions = {
    allTypes: (posts) => {
        return posts.map(post => {
            switch (post.kind) {
                case 't1':
                    return <div className='post'>
                        <div>
                            <p>Author:</p>
                            <p>{post.data.author}</p>
                        </div>
                        <div>
                            <p>Comment:</p>
                            <p>{post.data.body}</p>
                        </div>
                    </div>
                case 't3':
                    return <div className='post'>
                        <div>
                            <p>Author:</p>
                            <p>{post.data.author}</p>
                        </div>
                        <div>
                            <p>URL:</p>
                            <p>{post.data.url}</p>
                        </div>
                    </div>
                default:
                    return 'something went wrong!'
            }
        })
    },
    returnComments: (comments) => {
        return comments.map(comment => {
            return <div className='post'>
                <div>
                    <p>Author:</p>
                    <p>{comment.data.author}</p>
                </div>
                <div>
                    <p>Comment:</p>
                    <p>{comment.data.body}</p>
                </div>
            </div>
        })
    },
    returnLinks: (links) => {
        console.log(links)
        return links.map(link => {
            return <div className='post'>
                <div>
                    <p>Author:</p>
                    <p>{link.data.author}</p>
                </div>
                <div>
                    <p>URL:</p>
                    <p>{link.data.url}</p>
                </div>
            </div>
        })
    }
}