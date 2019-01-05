import React, { Component } from 'react';
import './sass/App.scss';
import Main from './components/Main/Main';
import Header from './components/Layout/Header/Header';
import Callback from './components/Auth/Callback/Callback';
import history from './components/Auth/history';
import { Router, Route } from 'react-router-dom';
import { Auth } from './components/Auth/Auth';
import Unauthorized from './components/Unauthorized/Unauthorized';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header auth={Auth} />
          <Route exact path="/" render={props => Auth.isAuthenticated() ? <Main {...props} /> : <Unauthorized {...props} />} />
          <Route path="/callback" render={props => { return (<Callback auth={Auth} {...props} />); }} />
        </div>
      </Router>
    );
  }
}
