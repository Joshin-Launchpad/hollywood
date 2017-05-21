import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './img/celebrate-life_logo.jpg';
import './index.css'

class Nav extends Component {

  render() {
    return (
      <div className="nav-container">
        <img className="logo" src={logo} alt="Celebrate Life" />
      </div>
    );
  }
}


export default Nav;
