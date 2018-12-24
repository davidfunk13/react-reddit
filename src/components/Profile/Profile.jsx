
import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class Profile extends Component {
    state = {
        isFetching: true,
        data: null,
    }
    componentDidMount() {
        axios.get('https://oauth.reddit.com/api/v1/me', { headers: { Authorization: 'Bearer ' + this.props.token } }).then(response => {
            this.setState({
                isFetching: false,
                data: response.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.isFetching ?
                    <div>
                        <p>
                            Fetching...
                        </p>
                    </div>
                    :
                    <div>
                        <p>{this.state.data.name}</p>
                        <Link to='/'>Back</Link>
                    </div>}
            </div>
        );
    }
}
