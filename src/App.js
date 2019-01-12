import React, { Component } from 'react';
import './sass/App.scss';
import history from './components/Auth/history';
import { Router, Route } from 'react-router-dom';
import { Header, Auth, Unauthorized, Callback, Main } from './components/index';
import { Reddit } from './utils/Reddit';
import { headerStyles } from './utils/materialUIStyles/index';
import { withStyles } from "@material-ui/core/styles";

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
    return (
      <Router history={history}>
        <div className="App">
          <Header classes={classes} logout={this.logout} toggle={this.toggleDrawer} open={open} user={user} auth={Auth} />
          <Route exact path="/" render={props =>
            Auth.isAuthenticated() ?
              <Main classes={classes} open={open} user={user} {...props} />
              :
              <Unauthorized classes={classes} open={open} user={user} {...props} />
          } />
          {/* <Route exact path="/profile" render={props =>
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
          } /> */}
          <Route path="/callback" render={props => {
            return <Callback classes={classes} open={open} user={user} auth={Auth} {...props} />;
          }} />
        </div>
      </Router>
    );
  }
};
export default withStyles(headerStyles, {withTheme: true})(App)