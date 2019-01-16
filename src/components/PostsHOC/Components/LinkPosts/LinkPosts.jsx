import React, { Component } from 'react';
import { Paper, Typography, Grid, Avatar, Card, CardMedia } from '@material-ui/core';
import thumb from '../AllPosts/thumb.png'
export default class LinkPost extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { posts } = this.props
        const { classes, classNames } = this.props.store
        return (
                posts.map(post => {
                    let img = ['gif', 'gifv', 'jpeg', 'jpg', 'png']
                    let url
                    img.map(format => {
                        console.log(post.data.url + format)
                    })
                        
                    return (
                   
                        <Paper key={post.data.id} className={classes.paper} elevation={4}>
                        <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
                            <Grid item xs={3}>
                                <Card className={classes.postCard} >
                                    <CardMedia className={classes.postThumb} image={url}>
                                    </CardMedia>
                                </Card>
                            </Grid>
                            <Grid  item xs={9} >
                                <Typography gutterBottom>
                                   Author: {post.data.author}
                                </Typography>
                                <Typography className={classes.postText} noWrap>
                                    Title: "{post.data.Title}"
                                </Typography>
                                <Typography className={classes.postText} noWrap>
                                    URL: "{post.data.url}"
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    )
                })
        )
    }
}