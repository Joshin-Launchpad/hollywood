import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Main from './Main';
import roses from './img/rainbow-roses.jpg';
import rocks from './img/rock-pile.jpeg';
import runners from './img/track-runners.jpg';


class App extends Component {
  // under return (<div>
  // <Navbar inverse fixedTop>
  // <Grid>...
  // )
  render() {
    return (
      <div>
        <nav class="navbar invert fixedTop">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <img alt="Brand" src="..." />
              </a>
            </div>
          </div>
        </nav>
        <div className="main">
          <h1 className="title">Celebrate Life!</h1>
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <img className="roses" src={roses} alt="Rainbow of Roses" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-md-3">
              <img className="runners" src={runners} alt="Runners on Track" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-md-3">
              <img className="rocks" src={rocks} alt="Pile of rocks" />
            </div>
          </div>
        </div>
        <ChatWindow />
        <Main />
      </div>
    );
  }
}


export default App;
