import React, { Component } from 'react';
import {Reddit} from '../../../../utils/Reddit.js';
import { Paper, Typography, Grid, Avatar, Card, CardMedia } from '@material-ui/core';
import thumb from '../../assets/img/thumb.png'

export default class AllPosts extends Component {
    renderThumb = (thumbData) => {
        switch (thumbData) {
            case 'self':
                return thumb
            case 'default':
                return thumb
            default:
                return thumbData;
        }
    }
    // sortPosts = (post, classes) => {
    //     switch (post.kind) {
    //         case 't1':
    //             return (
    //                 <Paper key={post.data.id} className={classes.paper} elevation={4}>
    //                     <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
    //                         <Grid item xs={3}>
    //                             <Card className={classes.postCard} >
    //                                 <CardMedia className={classes.postThumb} image={thumb} />
    //                             </Card>
    //                         </Grid>
    //                         <Grid item xs={9} >
    //                             <Typography gutterBottom>
    //                                 Author: {post.data.author}
    //                             </Typography>
    //                             <Typography className={classes.postText} noWrap>
    //                                 Comment: "{post.data.body}"
    //                                      </Typography>
    //                         </Grid>
    //                     </Grid>
    //                 </Paper>
    //             )
    //         case 't2':
    //             return (
    //                 <Paper key={post.data.id} className={classes.paper} elevation={4}>
    //                     <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
    //                         <Grid item xs={3}>
    //                             <Card className={classes.postCard} >
    //                                 <CardMedia className={classes.postThumb} image={this.renderThumb(post.data.thumbnail)}>

    //                                 </CardMedia>
    //                             </Card>
    //                         </Grid>
    //                         <Grid item xs={9} >
    //                             <Typography gutterBottom>
    //                                 Author: {post.data.author}
    //                             </Typography>
    //                             <Typography className={classes.postText} noWrap>
    //                                 Title: "{post.data.title}"
    //                                              </Typography>
    //                             <Typography className={classes.postText} noWrap>
    //                                 URL: "{post.data.url}"
    //                             </Typography>
    //                         </Grid>
    //                     </Grid>
    //                 </Paper>
    //             )
    //         case 't3':
    //             return (
    //                 <Paper key={post.data.id} className={classes.paper} elevation={4}>
    //                     <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
    //                         <Grid item xs={3}>
    //                             <Card className={classes.postCard} >
    //                                 <CardMedia className={classes.postThumb} image={this.renderThumb(post.data.thumbnail)}>

    //                                 </CardMedia>
    //                             </Card>
    //                         </Grid>
    //                         <Grid item xs={9} >
    //                             <Typography gutterBottom>
    //                                 Author: {post.data.author}
    //                             </Typography>
    //                             <Typography className={classes.postText} noWrap>
    //                                 Title: "{post.data.title}"
    //                                      </Typography>
    //                             <Typography className={classes.postText} noWrap>
    //                                 URL: "{post.data.url}"
    //                     </Typography>
    //                         </Grid>
    //                     </Grid>
    //                 </Paper>
    //             )
    //         default:
    //             return 'something went wrong'
    //     }
    // }
    render() {
        const { posts } = this.props;
        const { classes, classNames } = this.props.store;
        return (
            <div>
                {posts.map(post => {
                    return Reddit.sortPosts(post, this.props);
                })}
            </div>
        )
    }
}
