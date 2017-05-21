import React, { Component } from 'react';
import rocks from './img/rock-pile.jpeg';
import ny from './img/bw-newyork.jpg';
import children from './img/children.jpg';
import crafts from './img/crafts.jpg';
import dock from './img/dock-couple.jpg';
import food from './img/food.jpg';
import laugh from './img/laugh.jpg';
import alone from './img/alone.jpg';
import runners from './img/track-runners.jpg';
import didit from './img/did-it.jpg';
import flowers from './img/flowers.jpg';
import girl from './img/girl.jpg';

class Pics extends Component {
  // under return (<div>
  // <Navbar inverse fixedTop>
  // <Grid>...
  // )
  render() {
    return (
      <div>
        <img className="life-pics" src={laugh} alt="Runners on Track" />
        <img className="life-pics" src={girl} alt="Runners on Track" />
        <img className="life-pics" src={didit} alt="Pile of rocks" />
        <img className="life-pics" src={flowers} alt="Runners on Track" />
        <img className="life-pics" src={runners} alt="Runners on Track" />
        <img className="life-pics" src={rocks} alt="Pile of rocks" />
        <img className="life-pics" src={alone} alt="Runners on Track" />
        <img className="life-pics" src={dock} alt="Pile of rocks" />
        <img className="life-pics" src={ny} alt="Runners on Track" />
        <img className="life-pics" src={children} alt="Pile of rocks" />
        <img className="life-pics" src={crafts} alt="Runners on Track" />
        <img className="life-pics" src={food} alt="Pile of rocks" />
      </div>
    );
  }
}


export default Pics;
