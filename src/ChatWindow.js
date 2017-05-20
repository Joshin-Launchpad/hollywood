import React, { Component } from 'react';
import Item from './Item';
import './index.css';
// import Button from './Button'
// import Emoji from './Emoji';

class ChatWindow extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      textInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ textInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      message: this.state.textInput,
      ts: Date.now(), // Unix timestamp like 1495230784346
    };
    this.setState(state => ({
      items: [...state.items, newItem],
      textInput: '',
    }));
  }

// {ReactEmoji.emojify(*hello :)*)}


  render() {
    const { items, textInput } = this.state;
    return (
      <div>
        <h3>Let's Chat</h3>
        <ul
          style={{
            padding: 0,
            listStyleType: 'none',
          }}
        >
          {items.map(item => (
            <li key={item.ts}>
              <Item item={item} />
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={textInput} />
          <br />
            <button>😀</button>
            <button>😉</button>
            <button>😘</button>
            <button>😛</button>
          <br />
            <button>🤔</button>
            <button>😎</button>
            <button>☹️</button>
            <button>👍</button>
            <p>Emoji box here</p>
          <br />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatWindow;
