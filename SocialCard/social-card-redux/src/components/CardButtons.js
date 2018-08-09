import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CardButtons.css';

import messagesBtn from '../assets/messages-btn.png';
import retweetOnBtn from '../assets/retweet-btn-on.png';
import retweetOffBtn from '../assets/retweet-btn-off.png';
import likesOnBtn from '../assets/like-btn-on.png';
import likesOffBtn from '../assets/like-btn-off.png';
import mailtoBtn from '../assets/mailto-btn.png';

import { comment, like, retweet } from '../actions/actions';

const mapStateToProps = state => ({
  info: state.app.cardButtons
})

const mapDispatchToProps = dispatch => ({
  comment: () => dispatch(comment()),
  like: () => dispatch(like()),
  retweet: () => dispatch(retweet())
})

class CardButtons extends React.Component {

  onClick = (e) => {
    switch(e.target.name) {
      case "comments": 
        this.props.comment();
        break;
      case "likes":
        this.props.like();
        break;
      case "retweet":
        this.props.retweet();
        break;
      default:
        console.log('Clicked');
    }
  }

  render() {
    const { info } = this.props;
    return (
      <div className="buttons-container">
        <div className="buttons">
          <div><img name="comments" onClick={this.onClick} className="messages-btn" src={messagesBtn} alt="comment button"/>{info.comments}</div>
          <div style={{ color: info.retweetClicked ? "green" : ''}}><img name="retweet" onClick={this.onClick} className="retweet-btn" src={info.retweetClicked ? retweetOnBtn : retweetOffBtn} alt="retweet button"/>{info.retweet}</div>
          <div style={{ color: info.likesClicked ? "red" : ''}}><img name="likes" onClick={this.onClick} className="likes-btn" src={info.likesClicked ? likesOnBtn : likesOffBtn} alt="like button" />{info.likes}</div>
          <div><img className="mailto-btn" src={mailtoBtn} alt="mailto button"/></div>
        </div>
      </div>
    );
  }
}

CardButtons.propTypes = {
  info: PropTypes.shape({
    comments: PropTypes.number, 
    retweet: PropTypes.number,
    likes: PropTypes.number,
    commentsClick: PropTypes.bool,
    retweetClick: PropTypes.bool,
    likesClick: PropTypes.bool,
  }).isRequired,
  comment: PropTypes.func.isRequired,
  like: PropTypes.func.isRequired,
  retweet: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CardButtons);