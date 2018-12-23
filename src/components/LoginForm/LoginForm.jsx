import React, { Component } from "react";
import Reddit from "../../utils/Reddit";

let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`
export default class LoginForm extends Component {
    componentDidMount() {
        let url = window.location.href;
        if (url.includes('state')) {
            let state = url.match(/state=(.*?)&/)[1];
            // let token = url.match(/(?<=token=).*$/)[0];
            let bearer = url.match(/token=(.*?)&/)[1]
            if (state === process.env.REACT_APP_RANDOM_STRING && bearer !== undefined) {
                Reddit.login(state, bearer)

            }
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
