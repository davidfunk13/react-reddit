import React, { Component } from 'react';
import { Paper, Typography, Grid, Card, CardMedia } from '@material-ui/core';
import thumb from '../../../../assets/img/thumb.png';
export default class Video extends Component {

    render() {
        const { classes } = this.props.store;
        const {post} = this.props;
        return (
            <Paper key={post.data.id} className={classes.paper} elevation={4}>
            <Grid container direction="row" alignItems="center" alignContent="space-around" justify={"flex-start"} spacing={0}>
                <Grid item xs={3}>
                    <Card className={classes.postCard} >
                        <CardMedia className={classes.postThumb} image={post.data.thumbnail || thumb}/>
                    </Card>
                </Grid>
                <Grid item xs={9} >
                    <Typography gutterBottom>
                       Author: {post.data.author}
                    </Typography>
                    <Typography className={classes.postText} noWrap>
                    {/* //when you include the modal here, have the link open in it. */}
                         "{post.data.title}"
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        )
    }
}