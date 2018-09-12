import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hello react </h1>
         <a href="http://localhost:5000/auth/google">Sign in with Google </a>
         </header>
      </div>
    );
  }
}

export default App;
