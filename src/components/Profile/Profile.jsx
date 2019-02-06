
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
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
    }

    render() {
        const { open, classes, classNames } = this.props.store;
        const {data, isFetching} = this.state;
        return (
            <div>
                {isFetching ?
                    <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                        <Typography>
                            Fetching...
                        </Typography>
                    </main>
                    :
                    <main className={classNames(classes.content, { [classes.contentShift]: open })} >
                        <img onError={(e) => { e.target.onerror = null; e.target.src = thumb }} src={data.data.icon_img} alt="" />
                        <Typography>
                            {data.data.name}
                        </Typography>
                        
                        <Link to='/'>Back</Link>
                    </main>
                }
            </div>
        );
    }
};