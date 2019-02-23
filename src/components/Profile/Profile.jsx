
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Typography, Grid, Paper, CircularProgress } from '@material-ui/core';
import { Reddit } from '../../utils/Reddit';
import thumb from '../PostsHOC/assets/img/thumb.png';

export default class Profile extends Component {
    state = {
        isFetching: true,
        data: null,
    }
    componentDidMount() {
        if (sessionStorage.getItem('t')) {
            let token = sessionStorage.getItem('t');
            Reddit.masterUser(token).then(User => {
                console.log(User)
                this.setState({ isFetching: false, data: User });
            });
        }
    };

    parseTime = () => {
        var d = new Date(this.state.data.data.created * 1000),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2014-03-24, 3:00 PM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
        return time;
    }

    render() {
        const { open, classes, classNames } = this.props.store;
        const { data, isFetching } = this.state;
        return (
            <div>
                {isFetching ?
                    <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                        <Grid container direction={'column'} alignItems={'center'} alignContent={'center'}>
                            <Grid item xs={12}>
                                <Typography style={{ marginTop: '3rem' }}>
                                    Fetching...
                            </Typography>
                                <CircularProgress style={{ marginTop: '3rem' }} size={100} />
                            </Grid>
                        </Grid>
                    </main>
                    :
                    <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                        <Grid container spacing={8} direction={'column'} alignContent={'center'}>
                            <Grid item xs={12}>
                                <Paper elevation={4} style={{ padding: '1rem', marginBottom: '1rem' }}>
                                    <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={data.data.icon_img} alt="icon" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align={'center'} variant={'h5'}>
                                    User:
                                </Typography>
                                <Typography align={'center'}>
                                    {data.data.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align={'center'} variant={'h6'}>
                                    Account Created at:
                                </Typography>
                                <Typography align={'center'}>
                                    {this.parseTime()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align={'center'} variant={'h6'}>
                                    Comment Karma:
                                </Typography>
                                <Typography align={'center'}>
                                    {data.data.comment_karma}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align={'center'} variant={'h6'}>
                                    Link Karma:
                                </Typography>
                                <Typography align={'center'}>
                                    {data.data.link_karma}
                                </Typography>
                            </Grid>
                        </Grid>
                    </main>
                }
            </div>
        );
    }
};