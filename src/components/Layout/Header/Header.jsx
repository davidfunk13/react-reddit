import React, { Component } from 'react';
let authorize = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${process.env.REACT_APP_RANDOM_STRING}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE_STRING}`
class Header extends Component {
    render() {
        return (
            <header className='header'>
            {this.props.token === null ? <a href={authorize}>Authorize Reddit!</a> : <button onClick={()=> this.props.logout}>Logouit</button>}
            </header>
        )
    }
}
export default Header