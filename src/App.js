import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const rate = 1;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {
            "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
          }
        </p>
      </div>
    );
  }
}

export default App;
