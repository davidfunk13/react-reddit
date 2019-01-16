import React, { Component } from 'react';
import { Paper, Typography, Grid, Avatar, Card, CardMedia } from '@material-ui/core';
import thumb from '../AllPosts/thumb.png'
export default class CommentPosts extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    

    render() {
        const posts = this.props.posts.filter(post => post.kind === 't1')
        const { classes, classNames } = this.props.store
        return (
                posts.map(post => {
                    console.log(post)
                    return (
                         <Paper key={post.data.id} className={classes.paper} elevation={4}>
                                 <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
                                     <Grid item xs={3}>
                                         <Card className={classes.postCard} >
                                             <CardMedia className={classes.postThumb} image={thumb}>

                                             </CardMedia>
                                         </Card>
                                     </Grid>
                                     <Grid  item xs={9} >
                                         <Typography gutterBottom>
                                            Author: {post.data.author}
                                         </Typography>
                                         <Typography className={classes.postText} noWrap>
                                             Comment: "{post.data.body}"
                                         </Typography>
                                     </Grid>
                                 </Grid>
                             </Paper>
                    )
                })
        )
    }
}