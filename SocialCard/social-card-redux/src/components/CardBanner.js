import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CardBanner.css';

const mapStateToProps = state => ({
  info: state.app.cardBanner
})

class CardBanner extends React.Component {
  render() {
    const { info } = this.props;
    const styles = {
      banner: {
        color: `${info.textColor}`,
        backgroundColor: `${info.backgroundColor}`,
      },
      bannerIcon: {
        color: `${info.bannerIconTextColor}`,
        backgroundColor: `${info.bannerIconColor}`
      },
      author: {
        color: `${info.authorColor}`,
        backgroundColor: `${info.authorBackground}`
      }
    }

    return (
      <div className="banner-container">
        <div style={styles.banner} className="banner">
          <div style={styles.bannerIcon} className="banner-icon">{info.bannerIconText}</div>
          <p>{info.text}</p>
          <div style={styles.author} className="author-avatar">
            <span>{info.author}</span>
            <img className="author-img" src={info.authorImg} alt="Author avatar"/>
          </div>
        </div>
        <div className="banner-text">
          <h4>{info.title}</h4>
          <p>{info.summary}</p>
          <a href={info.link}>dev.to</a>
        </div>
      </div>
    );
  }
}

CardBanner.propTypes = {
  info: PropTypes.objectOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps)(CardBanner);