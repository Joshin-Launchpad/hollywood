import React, { Component } from 'react';
import Timer from './Timer'

export default class Item extends Component {
  render() {
    const { message, ts } = this.props.item
    return (
      <div>
        {message}
        <br />
        Sent at: <Timer time={ts}/>
      </div>
    );
  }
}
