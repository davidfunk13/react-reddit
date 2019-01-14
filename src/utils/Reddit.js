import React from 'react'
import axios from 'axios';
import { paperStyles } from './materialUIStyles';
import { Paper, Typography, Grid, Avatar } from '@material-ui/core';

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
                    return (
                        <Paper key={post.data.id} style={paperStyles.paper}>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <Avatar>A</Avatar>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                case 't3':
                    return (
                        <Paper key={post.data.id} style={paperStyles.paper}>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <Avatar>A</Avatar>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                default:
                    return 'something went wrong!'
            }
        })
    },
    returnComments: (comments) => {
        return comments.map(comment => {
            return (
                <Paper key={comment.data.id} style={paperStyles.paper}>
                    <Grid container spacing={16}>
                        <Grid item>
                            <Avatar>A</Avatar>
                        </Grid>
                    </Grid>
                </Paper>
            )
        })
    },
    returnLinks: (links) => {
        console.log(links)
        return links.map(link => {
            return (
                <Paper key={link.data.id} style={paperStyles.paper}>
                    <Grid container spacing={16}>
                        <Grid item>
                            <Avatar>A</Avatar>
                        </Grid>
                    </Grid>
                </Paper>
            )
        })
    }
}