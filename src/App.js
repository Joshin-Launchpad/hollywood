import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import roses from './img/rainbow-roses.jpg';


class App extends Component {
  // under return (<div>
  // <Navbar inverse fixedTop>
  // <Grid>...
  // )
  render() {
    return (
      <div>

          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/"></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>


            <div className="main">
              <h1 className="title">Celebrate Life!</h1>
              <p>
                <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
                </Button>
              </p>
              <div class="row">
                <div class="col-xs-6 col-md-3">
                  <a href="#" class="thumbnail">
                    <img className="thumbnail" src={roses} alt="Rainbow of Roses" />
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-md-3">
                  <a href="#" class="thumbnail">
                    <img className="thumbnail" src={roses} alt="Rainbow of Roses" />
                  </a>
                </div>
              </div>
            </div>

            <ChatWindow />

      </div>
    );
  }
}


export default App;
