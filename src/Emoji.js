import React, { Component } from 'react';
import ReactEmoji from 'react-emoji'

class Emoji extends Component {
  render() {
    return (

      // Create a new component, or components, that will allow you to choose from a selection of emoji from a list. When the user selects the emoji, it should be added to the end of the message. The user should be able to add additional text or emojis to the message before sending it.

      // {ReactEmoji.emojify(*hello :)*)}

// <span class="emoji-outer emoji-sizer" style="background: url(https://fst.slack-edge.com/bfaba/img/emoji_2016_06_08/sheet_apple_64_indexed_256colors.png);background-position:65% 62.5%;background-size:4100%"></span>



      // example code
      <div className="emoji-grid">
        <a class="emoji_li" data-color-index="4" data-name=":grinning:" data-names=":grinning:">
          <span>
            <span class="emoji-outer emoji-sizer" style="background-color: yellow">
            </span>
          </span>
        </a>
      </div>



    );
  }
}

export default Emoji;
