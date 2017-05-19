import React, { Component } from 'react';
import './index.css';
// import moment from './moment-with-locales.js'
var moment = require('moment');

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dateSet = this.dateSet.bind(this);
    this.state = {
      items: [],
      text: ''
      // date: dateSet()
    }
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.id} {item.text}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Send'}</button>
        </form>
      </div>
    );
  }





  dateSet() {
    let tFormat = moment().fromNow()
    return tFormat
  }



  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: this.dateSet()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

}

export default ChatWindow;

// dateSet() {
//     var date = new Date().toLocaleTimeString('en-US', { hour: '2-digit', hour12: true, minute: 'numeric', second: 'numeric' });
//     return date
// }

// let tFormat = moment().format("hh:mm:ss a")
// let tFormat = moment().format("hh:mm:ss a").fromNow()
// let tFormat = moment().format("hh:mm:ss a").fromNow()
// let date = tFormat.fromNow()
