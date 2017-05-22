import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';



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
        <Footer />
      </div>
    );
  }
}


export default App;
