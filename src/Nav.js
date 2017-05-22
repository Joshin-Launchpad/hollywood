import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './img/celebrate-life_logo.jpg';
import './index.css'

class Nav extends Component {

  render() {
    return (
      <div className="nav-container">
        <div className="nav-left">
          <img className="logo" src={logo} alt="Celebrate Life" />
        </div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li>About</li>
            <li>Contact</li>
            <li>Donate</li>
          </ul>  
        </div>
      </div>
    );
  }
}


export default Nav;
