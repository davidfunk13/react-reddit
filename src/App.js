import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
import Reddit from './utils/Reddit'
import Header from './components/Header/Header';
import Saved from './components/Saved/Saved';
import Profile from './components/Profile/Profile';
export default class App extends Component {
  state = {
    token: Reddit.authorize()
  }
  render() {
    return (
      <div className="App">
        <Header token={this.state.token} />
        {this.state.token ?
          <div>
            <Switch>
              <Route exact path="/" render={(props) => { return <Main token={this.state.token} {...props} /> }} />
              <Route path="/profile" render={(props) => { return <Profile token={this.state.token} {...props} /> }} />
              <Route path="/Saved" render={(props) => { return <Saved token={this.state.token} {...props} /> }} />
            </Switch>
          </div>
          :
          <div>
            <p>No token</p>
          </div>
        }
      </div>
    );
  }
}
