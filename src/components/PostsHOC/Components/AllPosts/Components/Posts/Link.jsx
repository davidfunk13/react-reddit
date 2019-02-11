import React, { Component } from 'react';
import { Paper, Typography, Grid, Card, CardMedia } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png';
export default class Link extends Component {
    render() {
        const { classes } = this.props.store;
        const {post} = this.props;
        return (
            <Paper key={post.data.id} className={classes.paper} elevation={4}>
            <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
                <Grid item xs={3}>
                    <Card className={classes.postCard} >
                        <CardMedia className={classes.postThumb} image={post.data.thumbnail === 'default' || 'self' ? thumb : post.data.thumbnail}/>
                    </Card>
                </Grid>
                <Grid  item xs={9} >
                    <Typography gutterBottom noWrap>
                       Title: {post.data.title}
                    </Typography>
                    <Typography className={classes.postText} noWrap>
                        URL: {post.data.url}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        )
    }
}