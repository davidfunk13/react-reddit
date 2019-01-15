import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Reddit } from '../../utils/Reddit';
import PostsHOC from '../PostsHOC/PostsHOC';
import { Typography, Grid } from '@material-ui/core/';

export default class Saved extends Component {
    state = {
        saved: []
    };

    componentDidMount() {
        if (this.props.store.user) {
            Reddit.fetchSaved(this.props.store.user.data.name, sessionStorage.getItem('t')).then(response => {
                this.setState({ saved: response.data.data.children })
            });
        }
    }

    render() {
        const { classNames, open, classes } = this.props.store;
        return (
            <Grid container justify={"center"}>
                <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                    {this.state.saved.length ?
                        <PostsHOC posts={this.state.saved} {...this.props} />
                        :
                        <Typography>
                            Saved
                         </Typography>
                    }
                </main>
                <Link to="/">Back</Link>
            </Grid>
        )
    }
}