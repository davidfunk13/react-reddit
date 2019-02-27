import React, { Component } from 'react';
import './sass/App.scss';
import history from './components/Auth/history';
import { Router, Route } from 'react-router-dom';
import { Header, Auth, Unauthorized, Callback, Main, Saved, Profile } from './components/index';
import { Reddit } from './utils/Reddit';
import styles from './utils/materialUIStyles/styles';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

class App extends Component {

  state = {
    open: false,
    isFetching: true,
    user: null,
  }

  componentDidMount() {
    if (sessionStorage.getItem('t')) {
      let token = sessionStorage.getItem('t');
      Reddit.masterUser(token).then(User => {
        this.setState({ isFetching: false, user: User });
      });
    }
  }

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  logout = () => {
    if (this.state.open === true) {
      this.setState({ open: false })
      Auth.logout();
    }
  };

  render() {
    const { open, user } = this.state;
    const { classes } = this.props;
    const logout = this.logout;
    const toggle = this.toggleDrawer;
    const auth = Auth;
    let store = { open, user, classes, classNames, logout, toggle, auth };
    return (
      <Router history={history}>
        <div className="App">
          <Header store={store} />
          <Route exact path="/" render={props =>
            Auth.isAuthenticated() ?
              <Main store={store} {...props} />
              :
              <Unauthorized store={store} {...props} />
          } />
          <Route exact path="/profile" render={props =>
            Auth.isAuthenticated() ?
              <Profile store={store} {...props} />
              :
              <Unauthorized store={store} {...props} />
          } />
          {/* <Route exact path="/frontpage" render={props =>
            Auth.isAuthenticated() ?
              <Frontpage store={store} {...props} />
              :
              <Unauthorized store={store} {...props} />
          } /> */}
          <Route exact path="/saved" render={props =>
            Auth.isAuthenticated() ?
              <Saved store={store} {...props} />
              :
              <Unauthorized store={store} {...props} />
          } />
          <Route path="/callback" render={props => {
            return <Callback store={store} {...props} />;
          }} />
        </div>
      </Router>
    );
  }
};
export default withStyles(styles, { withTheme: true })(App)