import React from 'react'
import axios from 'axios';
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
                    return <Paper style={{height: '10vh'}}>
                            <Grid container spacing={10}>
                                 <Grid item>
                                    <Avatar>All</Avatar>
                                </Grid>
                            {/* <Grid item zeroMinWidth>
                                <Typography noWrap>Author:</Typography>
                                <Typography noWrap>{post.data.author}</Typography>
                            </Grid> */}
                            {/* <Grid item zeroMinWidth>
                                <Typography noWrap>Comment:</Typography>
                                <Typography noWrap>{post.data.body}</Typography>
                            </Grid> */}
                        </Grid>
                    </Paper>

                case 't3':
                    return <Paper>
                        <Grid container spacing={10}>
                            {/* <Grid item>
                                <Avatar>All</Avatar>
                            </Grid>
                            <Grid item zeroMinWidth>

                                <Typography noWrap>Author:</Typography>
                                <Typography noWrap>{post.data.author}</Typography>
                            </Grid>
                            <Grid item zeroMinWidth>

                                <Typography noWrap>Url:</Typography>
                                <Typography noWrap>{post.data.url}</Typography>
                            </Grid> */}
                        </Grid>
                    </Paper>
                default:
                    return 'something went wrong!'
            }
        })
    },
    returnComments: (comments) => {
        return comments.map(comment => {
            return <Paper>
                <Grid container spacing={10}>
                    <Grid container >
                        <Grid item>
                            <Avatar>All</Avatar>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item zeroMinWidth>

                            <Typography noWrap>Author:</Typography>
                            <Typography noWrap>{comment.data.author}</Typography>
                        </Grid>
                        <Grid item zeroMinWidth>

                            <Typography noWrap>Url:</Typography>
                            <Typography noWrap>{comment.data.url}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>

        })
    },
    returnLinks: (links) => {
        console.log(links)
        return links.map(link => {
            return <Paper>
                <Grid container spacing={10}>
                    <Grid item>
                        <Avatar>All</Avatar>
                    </Grid>
                    <Grid item zeroMinWidth>

                        <Typography noWrap>Author:</Typography>
                        <Typography noWrap>{link.data.author}</Typography>
                    </Grid>
                    <Grid item zeroMinWidth>

                        <Typography noWrap>Url:</Typography>
                        <Typography noWrap>{link.data.url}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        })
    }
}