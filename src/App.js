import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';


class App extends Component {

// <img src={logo} className="App-logo" alt="logo" />

  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <ChatWindow />
      </div>
    );
  }
}

export default App;
