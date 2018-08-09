import React from 'react';
import './CardButtons.css';

import messagesBtn from '../assets/messages-btn.png';
import retweetOnBtn from '../assets/retweet-btn-on.png';
import retweetOffBtn from '../assets/retweet-btn-off.png';
import likesOnBtn from '../assets/like-btn-on.png';
import likesOffBtn from '../assets/like-btn-off.png';
import mailtoBtn from '../assets/mailto-btn.png';

class CardButtons extends React.Component {
  render() {
    const { info } = this.props;

    return (
      <div className="buttons-container">
        <div className="buttons">
          <div><img name="comments" onClick={this.props.onClick} className="messages-btn" src={messagesBtn}/>{info.comments}</div>
          <div style={{ color: info.retweetClicked ? "green" : ''}}><img name="retweet" onClick={this.props.onClick} className="retweet-btn" src={info.retweetClicked ? retweetOnBtn : retweetOffBtn} />{info.retweet}</div>
          <div style={{ color: info.likesClicked ? "red" : ''}}><img name="likes" onClick={this.props.onClick} className="likes-btn" src={info.likesClicked ? likesOnBtn : likesOffBtn} />{info.likes}</div>
          <div><img className="mailto-btn" src={mailtoBtn}/></div>
        </div>
      </div>
    );
  }
}

export default CardButtons;