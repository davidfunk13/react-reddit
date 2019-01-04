import React, { Component } from 'react';
import './sass/App.scss';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Saved from './components/Saved/Saved';
import Profile from './components/Profile/Profile';
import Reddit from './utils/Reddit';
export default class App extends Component {
  state = { token: null }
  componentDidMount() {
    if (Reddit.authorize() === null && sessionStorage.getItem('t') !== null) {
      let token = sessionStorage.getItem('t')
      console.log(token)
      this.setState({ token: token })
    } else {
      this.setState({ token: Reddit.authorize() })
    }
  }
  logout() {
    sessionStorage.removeItem('t');
    Reddit.authorize()
    this.setState({ token: null });
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.token}</p>
        {this.state.token ? <button onClick={() => this.logout()}>Logout</button> : <div></div>}
        <div>
          {this.state.token ? <Switch>
            <Route exact path="/" render={(props) => { return <Main token={this.state.token} {...props} /> }} />
            <Route path="/profile" render={(props) => { return <Profile token={this.state.token} {...props} /> }} />
            <Route path="/Saved" render={(props) => { return <Saved token={this.state.token} {...props} /> }} />
          </Switch> :
            <div>Please Authorize Reddit</div>
          }

        </div>
      </div>
    );
  }
}
