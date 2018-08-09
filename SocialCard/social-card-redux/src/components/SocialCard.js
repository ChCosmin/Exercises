import React from 'react';
import { Collapse } from 'react-collapse';
import './SocialCard.css';

import CardInfo from './CardInfo';
import CardBanner from './CardBanner';
import CardButtons from './CardButtons';

class SocialCard extends React.Component {
  state={
    isOpened: true
  };

  collapse = () => {
    this.setState({ isOpened: !this.state.isOpened })
  };

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
      </div>
    )
  };
};

export default SocialCard;