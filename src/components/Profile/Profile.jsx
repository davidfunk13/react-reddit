
import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class Profile extends Component {
    state = {
        isFetching: true,
        data: null,
    }
    componentDidMount() {
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
