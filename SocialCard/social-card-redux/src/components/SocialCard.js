import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import './SocialCard.css';

import CardInfo from './CardInfo';
import CardBanner from './CardBanner';
import CardButtons from './CardButtons';

import { generateCard } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  generateCard: () => dispatch(generateCard())
})

class SocialCard extends React.Component {
  state={
    isOpened: true
  };

  collapse = () => {
    this.setState({ isOpened: !this.state.isOpened })
  };

  generateCard = () => {
    this.props.generateCard();
  }

  render() {
    return(
      <div className="card-container">
        <CardInfo 
          isOpened={this.state.isOpened} 
          collapse={this.collapse} 
        />
        <Collapse isOpened={this.state.isOpened} >
          <CardBanner />
          <CardButtons />
        </Collapse>
        <button className="generate-card-btn" onClick={this.generateCard}>Generate Card</button>
      </div>
    )
  };
};

SocialCard.propTypes = {
  generateCard: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SocialCard);