import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
import Reddit from './utils/Reddit'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
class App extends Component {
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
              <Route exact path="/" render={(props) => {
                return <Main redditFunctionality={Reddit} token={this.state.token} {...props} />
              }} />
              <Route path="/profile" render={(props) => { return <Profile redditFunctionality={Reddit} token={this.state.token} {...props} /> }} />

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

export default App;
