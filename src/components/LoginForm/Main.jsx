
import React, { Component } from "react";
import Reddit from "../../utils/Reddit";

let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`
export default class Main extends Component {
    state = {
        token: ''
    }
    componentDidMount() {
        let token = Reddit.authorize()
        if (token !== undefined) {
            this.setState({ token: token })
            console.log(this.state.token);
        }
    }
    render() {
        return (
            <div>
                <a href={authorize}>Login to reddit</a>
            </div>
        );
    }
}
