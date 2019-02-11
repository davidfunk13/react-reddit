import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Reddit } from '../../utils/Reddit';
import PostsHOC from '../PostsHOC/PostsHOC';
import { Typography, Grid } from '@material-ui/core/';

export default class Saved extends Component {
    state = {
        isFetching: true,
        saved: []
    };

    componentDidMount() {
        if (this.props.store.user === null && sessionStorage.getItem('t')) {
            let token = sessionStorage.getItem('t');
            Reddit.masterUser(token).then(user => {
                Reddit.fetchSaved(user.data.name, token).then(response => {
                    this.setState({
                        isFetching: false,
                        saved: response.data.data.children,
                        requestInfo: {
                            before: response.data.data.before,
                            after: response.data.data.after,
                            dist: response.data.data.dist,
                        }
                    });
                });
            })
        } else if (this.props.store.user !== null && sessionStorage.getItem('t')) {
            let token = sessionStorage.getItem('t');
            Reddit.fetchSaved(this.props.store.user.data.name, token).then(response => {
                this.setState({
                    isFetching: false,
                    saved: response.data.data.children,
                    requestInfo: {
                        before: response.data.data.before,
                        after: response.data.data.after,
                        dist: response.data.data.dist,
                    }
                })
            })
        }
    }

    render() {
        const { classNames, open, classes } = this.props.store;
        return (
            <Grid container justify={"center"}>
                <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                    {this.state.isFetching ?
                        <Typography>
                            Fetching...
                         </Typography>
                        :
                        <PostsHOC requestInfo={this.state.requestInfo} posts={this.state.saved} {...this.props} />
                    }
                </main>
                <Link to="/">Back</Link>
            </Grid>
        )
    }
}