import React, { Component } from 'react';
import './sass/App.scss';
import history from './components/Auth/history';
import { Router, Route } from 'react-router-dom';
import { Header, Auth, Unauthorized, Callback, Main, Profile, Saved } from './components/index';
import { Reddit } from './utils/Reddit';

export default class App extends Component {
  
  state = {
    user: null,
  }

  componentDidMount() {
    Reddit.masterUser().then(User => {
      switch (User.status) {
        case 200:
          this.setState({ user: User.data });
          break;
        case 401:
          this.setState({ user: null });
          break;
        default:
          this.setState({ user: null })
          break;
      }
    });
  }

  render() {
    let user = this.state.user;
    return (
      <Router history={history}>
        <div className="App">
          <Header user={user} auth={Auth} />
          <Route exact path="/" render={props =>
            Auth.isAuthenticated() ?
              <Main user={user} {...props} />
              :
              <Unauthorized user={user} {...props} />
          } />
          <Route exact path="/profile" render={props =>
            Auth.isAuthenticated() ?
              <Profile user={user} {...props} />
              :
              <Unauthorized user={user} {...props} />
          } />
          <Route exact path="/saved" render={props =>
            Auth.isAuthenticated() ?
              <Saved user={user} {...props} />
              :
              <Unauthorized user={user} {...props} />
          } />
          <Route path="/callback" render={props => {
            return <Callback user={user} auth={Auth} {...props} />;
          }} />
        </div>
      </Router>
    );
  }
};
