import React, { Component } from 'react';
import './App.css';
import Main from './components/LoginForm/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import Reddit from './utils/Reddit'
class App extends Component {
  componentDidMount(){
  }
  render() {
    
    return (
      <div className="App">
        <BrowserRouter >
          <Route path="/" component={Main}></Route>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
