import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/test-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Playground</h1>
        </header>
        <p className="App-intro">
          Checkout the components below!
        </p>
        <TestComponent text={'hello'} />
      </div>
    );
  }
}

export default App;
