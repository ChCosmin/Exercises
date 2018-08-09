import React from 'react';
import './CardInfo.css';

import upArrow from '../assets/up-arrow.png';
import downArrow from '../assets/down-arrow.png';

class CardInfo extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className="card-info-container">
        <div className="card-info-avatar">
          <img className="avatar-img" src={info.avatarImg} alt="Social Card Avatar Img"/>
        </div>
        <div className="card-info-info">
          <h5>{info.username} <span>@{info.username}</span> - {info.date}</h5>
          <p>{info.text}</p>
          <p>	&#123; author: @{info.author} &#125;</p>
        </div>
        <div className="card-info-arrow">
          <img className="collapse-arrows" onClick={this.props.collapse} src={this.props.isOpened ? upArrow : downArrow} alt={this.props.isOpened ? 'down-arrow' : 'up-arrow'} />
        </div>
      </div>
    );
  }
}

export default CardInfo;