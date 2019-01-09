import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Reddit } from '../../utils/Reddit';
export default class Saved extends Component {
    componentDidMount() {
        if (this.props.user) { 
            Reddit.fetchSaved(this.props.user.data.name, sessionStorage.getItem('t')).then(response => { 
                this.setState({saved: response.data})

               })        }

    }
    render() {
        return (
            <div>
                <p>Saved</p>
                <button onClick={() => { console.log(this.state) }}></button>
                <Link to="/">Back</Link>
            </div>
        )
    }
}