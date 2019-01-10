import React from 'react'
import axios from 'axios';

let token = sessionStorage.getItem('t');
export const Reddit = {
    masterUser: (token) => {
        return axios.get('https://oauth.reddit.com/api/v1/me', { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => {
                console.log(err.response);
                return err.response
            });
    },
    fetchSaved: (user, token) => {
        console.log(user, token)
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
            return <div>
                <p>{post.kind}</p>
            </div>
        })
    },
    returnComments: (comments) => {
        return comments.map(comment => {
            return <div className='comment'>
                <p>{comment.data.author}</p>
                <p>{comment.data.body}</p>
            </div>
        })
    },
    returnLinks: (links) => {
       return links.map(link => {
           return <div className='comment'>
                <p>{link.data.author}</p>
                <p>{link.data.url}</p>
            </div>
        })
    }
}