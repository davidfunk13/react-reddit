import React, { Component } from 'react';
import './sass/App.scss';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Saved from './components/Saved/Saved';
import Profile from './components/Profile/Profile';
// import Reddit from './utils/Reddit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from './redux/actions/auth/authActions';
class App extends Component {
  componentDidMount() {
    console.log(this.props.auth.token)
    console.log(this.props)
    this.props.actions.auth.authorizeReddit()
  }
  render() {
    
    return (
      <div className="App">
        <p>{this.props.auth.token}</p>
        <Header {...this.props} />
        <div>
          {this.props.auth.token ? 
          <Switch>
            <Route exact path="/" render={() => { return <Main {...this.props} /> }} />
            <Route path="/profile" render={() => { return <Profile {...this.props} /> }} />
            <Route path="/Saved" render={() => { return <Saved {...this.props} /> }} />
          </Switch> :
            <div>Please Authorize Reddit</div>
          }

        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(authActionCreators, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
