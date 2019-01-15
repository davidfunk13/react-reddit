import React, { Component } from 'react';

import { Paper, Typography, Grid, Avatar } from '@material-ui/core';

export default class AllPosts extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { posts } = this.props
        const { classes, classNames } = this.props.store
        return (
            posts.map(post => {
                switch (post.kind) {
                    case 't1':
                        return (
                            <Paper key={post.data.id} className={classes.paper}>
                                <Grid className={classes.postPaperGrid} container alignItems={"center"} justify={"flex-start"} alignContent={"space-between"}>
                                    <Grid item>
                                        <div style={{ margin: '1.2rem', backgroundColor: 'red', height: '5rem', width: '5rem' }}></div>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction={"column"}>
                                            <Grid item>

                                                <Typography>
                                                    Poop
                                        </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>
                                                    Also poop
                                        </Typography>
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Paper>
                        )
                    case 't3':
                        return (
                            <Paper key={post.data.id} className={classes.paper}>
                            <Grid className={classes.postPaperGrid} container alignItems={"center"} justify={"flex-start"} alignContent={"space-between"}>
                                <Grid item>
                                    <div style={{ margin: '1.2rem', backgroundColor: 'red', height: '5rem', width: '5rem' }}></div>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"}>
                                        <Grid item>

                                            <Typography>
                                                Poop
                                    </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                Also poop
                                    </Typography>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Grid>
                        </Paper>
                        )
                    default:
                        return 'something went wrong!'
                }
            })
        )
    }
}
