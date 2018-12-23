
import React, { Component } from "react";

export default class Main extends Component {

    componentDidMount() {
        console.log(this.props.token)
    }
    render() {
        return (
            <div>
                {this.props.token ?
                    <div> Has token!
                        <button onClick={() => this.props.redditFunctionality.testQuery(this.props.token)}>Test</button>                   
                    </div> : <div>No token</div>}
            </div>
        );
    }
}
