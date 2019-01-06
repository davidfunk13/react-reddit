import React, { Component } from 'react';
import './sass/App.scss';
import history from './components/Auth/history';
import { Router, Route } from 'react-router-dom';
import * as Components from './components/index';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Components.Header auth={Components.Auth} />
          <Route exact path="/" render={props =>
            Components.Auth.isAuthenticated() ?
              <Components.Main {...props} />
              :
              <Components.Unauthorized {...props} />
          } />
          <Route path="/callback" render={props => {
            return <Components.Callback auth={Components.Auth} {...props} />;
          }} />
        </div>
      </Router>
    );
  }
}
