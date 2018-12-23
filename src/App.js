import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import Reddit from './utils/Reddit'
import Header from './components/Header/Header'
class App extends Component {
  state = {
    token: Reddit.authorize()
  }
  componentDidMount(){
    console.log(this.state.token)
    
  }
  render() {
    
    return (
      <div className="App">
      <Header/>
        <BrowserRouter >
          <Route path="/" render={(props) =>{return <Main redditFunctionality={Reddit} token={this.state.token} {...props}  />}}></Route>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
