import React, { Component } from "react";
import Reddit from '../../utils/Reddit.js';
let CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
let TYPE = process.env.REACT_APP_RESPONSE_TYPE;
let URI = process.env.REACT_APP_REDIRECT_URI;
let RANDOM_STRING = 'myanusisbleeding';
let DURATION = process.env.REACT_APP_DURATION;
let SCOPE_STRING = process.env.REACT_APP_SCOPE_STRING;
console.log(CLIENT_ID, TYPE, URI, RANDOM_STRING, DURATION, SCOPE_STRING)
export default class LoginForm extends Component {
    state = {
        loginUser: "",
        loginPass: "",
        Err: '',
    };
    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // let CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
        // let TYPE = process.env.REACT_APP_RESPONSE_TYPE;
        // let URI = process.env.REACT_APP_REDIRECT_URI;
        // let RANDOM_STRING = 'myanusisbleeding';
        // let DURATION = process.env.REACT_APP_DURATION;
        // let SCOPE_STRING = process.env.REACT_APP_SCOPE_STRING;
        // // console.log('User: ' + this.state.loginUser, 'Pass: ' + this.state.loginPass);
        // window.location.hash === `https://www.reddit.com/api/v1/authorize?
        // client_id=${CLIENT_ID}
        // &response_type=${TYPE}
        // &state=${RANDOM_STRING}
        // &redirect_uri=${URI}
        // &duration=${DURATION}
        // &scope=${SCOPE_STRING}`
        // event.preventDefault();
        // Reddit.login({ User: this.state.loginUser, Pass: this.state.loginPass })
    }


    render() {

        return (
            <div>
                <form>
                    <input
                        className=''
                        value={this.state.loginUser}
                        name="loginUser"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter Username"
                    />
                    <input
                        className=''
                        value={this.state.loginPass}
                        name="loginPass"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter Password"
                    />
                    <div>
                        <a href={`https://www.reddit.com/api/v1/authorize?api_key&client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=code&scope=identity&state=myanus&duration=permanent
`}>asdasdasdasd</a>
                    </div>
                </form>
            </div>
        );
    }
}
