
import React, { Component } from "react";
import { Link } from 'react-router-dom'
export default class Main extends Component {

    componentDidMount(){
        console.log(this.props.user)
    }
    render() {
        return (
            <div>
                    <Link to="/profile">Profile</Link>
                    <Link to="/saved">Saved</Link>
            </div>
        );
    }
}
