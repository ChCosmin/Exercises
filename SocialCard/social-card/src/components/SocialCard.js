import React from 'react';
import './SocialCard.css';
import { Collapse } from 'react-collapse';

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
          info={this.props.header}
        />
        <Collapse isOpened={this.state.isOpened} >
          <CardBanner info={this.props.banner}/>
          <CardButtons onClick={this.props.onClick} info={this.props.buttons} />
        </Collapse>
        <button className="generate-card-btn" onClick={this.props.generateCard}>Generate Card</button>
      </div>
    )
  };
};

export default SocialCard;