import React, { Component } from 'react';
import './sass/App.scss';
import history from './components/Auth/history';
import { Router, Route } from 'react-router-dom';
import { Header, Auth, Unauthorized, Callback, Main, Profile, Saved } from './components/index';
import {Reddit} from './utils/Reddit';

export default class App extends Component {
  state = {
    user: null,
  }
  componentDidMount() {
    Reddit.masterUser().then(User => this.setState({user: User.data}));
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header user={this.state.user} auth={Auth} />
          <Route exact path="/" render={props =>
            Auth.isAuthenticated() ?
            <div><button onClick={()=> console.log(this.state.user)}>clg</button><Main user={this.state.user} {...props} /></div>
              
              :
              <Unauthorized user={this.state.user} {...props} />
          } />
          <Route exact path="/profile" render={props =>
            Auth.isAuthenticated() ?
              <Profile user={this.state.user} {...props} />
              :
              <Unauthorized user={this.state.user} {...props} />
          } />
          <Route exact path="/saved" render={props =>
            Auth.isAuthenticated() ?
              <Saved user={this.state.user} {...props} />
              :
              <Unauthorized user={this.state.user} {...props} />
          } />
          <Route path="/callback" render={props => {
            return <Callback auth={Auth} {...props} />;
          }} />
        </div>
      </Router>
    );
  }
}
