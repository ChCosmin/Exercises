import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CardInfo.css';
import upArrow from '../assets/up-arrow.png';
import downArrow from '../assets/down-arrow.png';

const mapStateToProps = state => ({
  info: state.app.cardHeader
})

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
          <img 
            className="collapse-arrows" 
            onClick={this.props.collapse} 
            src={this.props.isOpened ? upArrow : downArrow} 
            alt={this.props.isOpened ? 'down-arrow' : 'up-arrow'} 
          />
        </div>
      </div>
    );
  }
}

CardInfo.propTypes = {
  collapse: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps)(CardInfo);