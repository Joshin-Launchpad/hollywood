import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Nav from './Nav';



class App extends Component {
  // under return (<div>
  // <Navbar inverse fixedTop>
  // <Grid>...
  // )
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}


export default App;
