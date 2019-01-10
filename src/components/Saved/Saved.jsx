import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Reddit } from '../../utils/Reddit';
export default class Saved extends Component {
    state = {
        saved: []
    }
    componentDidMount() {
        if (this.props.user) {
            Reddit.fetchSaved(this.props.user.data.name, sessionStorage.getItem('t')).then(response => {
                this.setState({ saved: response.data.data.children })
            });
        }

    }
    render() {
        return (
            <div>
                <p>Saved</p>
                <div>
                    {this.state.saved.length ? this.state.saved.map(saved => {
                        return <div key={saved.data.id}>{saved.data.title}</div>
                    }) : <div>Loading...</div>}
                </div>
                <Link to="/">Back</Link>
            </div>
        )
    }
}