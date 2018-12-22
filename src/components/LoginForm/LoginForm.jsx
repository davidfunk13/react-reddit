import React, { Component } from "react";
import Reddit from '../../utils/Reddit.js';

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
        console.log('User: ' + this.state.loginUser, 'Pass: ' + this.state.loginPass);
        event.preventDefault();
        Reddit.login({User:this.state.loginUser, Pass: this.state.loginPass})
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
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
