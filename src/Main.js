import React, { Component } from 'react';
import './index.css';
import ChatWindow from './ChatWindow';
import Pics from './Pics';
// import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';


class Main extends Component {


  render() {
    return (
      <div className="main-container">
        <div className="pics-container">
          <Pics />
        </div>
        <div className="chat-window-container">
          <ChatWindow />
        </div>
      </div>
    );
  }
}


export default Main;
