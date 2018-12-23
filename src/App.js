import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Route path="/" component={LoginForm}></Route>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
