import React, { Component } from 'react';
import './sass/App.scss';
import Main from './components/Main/Main';
import Header from './components/Layout/Header/Header';
import Callback from './components/Auth/Callback/Callback';
import history from './components/Auth/history';
import {Router, Route} from 'react-router-dom';
import { Auth } from './components/Auth/Auth';
export default class App extends Component {
  componentDidMount() {
    console.log(Auth.isAuthenticated());
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header auth={Auth} />
          <Route exact path="/" render={props => { return (<Main auth={Auth} {...props} />); }} />
          <Route path="/callback" render={props => { return (<Callback auth={Auth} {...props} />); }} />
        </div>
      </Router>
    );
  }
}
