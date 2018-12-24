
import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class Profile extends Component {
    state = {
        isFetching: true,
        data: null,
    }
    componentDidMount() {
        console.log(this.props.token)
        axios.get('https://oauth.reddit.com/api/v1/me', { headers: { Authorization: 'Bearer ' + this.props.token } }).then(response => {
            console.log(response.data)
            this.setState({
                isFetching: false,
                data: response.data
            })
        }) 
    }
    render() {
        return (
            <div>
                {this.state.isFetching ? <div>Fetching...</div> :
                 <div>
                     {/* Profile */}
                 {this.state.data.name}
                </div> }
            </div>
        );
    }
}
