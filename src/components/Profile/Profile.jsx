
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Reddit } from '../../utils/Reddit';

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
    }

    render() {
        const { open, classes, classNames } = this.props.store;
        return (
            <div>
                {this.state.isFetching ?
                    <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                        <Typography>
                            Fetching...
                        </Typography>
                    </main>
                    :
                    <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                        <Typography>
                            {this.state.data.data.name}
                        </Typography>
                        <Link to='/'>Back</Link>
                    </main>
                }
            </div>
        );
    }
};