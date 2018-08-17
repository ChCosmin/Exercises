import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SocialCardInputs.css'

import { updateHeader, updateBanner } from '../actions/actions';

const mapStateToProps = state => ({
  state: state.app
})

const mapDispatchToProps = dispatch => ({
  updateHeader: input => dispatch(updateHeader(input)),
  updateBanner: input => dispatch(updateBanner(input))
})

class SocialCardInputs extends React.Component {

  onChange = (e) => {
    const input = {
      name: e.target.name,
      value: e.target.value
    }
    if(e.target.className === 'cardHeader') {
      this.props.updateHeader(input);
    }
    if(e.target.className === 'cardBanner') {     
      this.props.updateBanner(input);
    }
  }

  render() {
    const { state } = this.props;
    const header = state.cardHeader;
    const banner = state.cardBanner;
    return (
      <div className="card-inputs">
        <h2>Card Header</h2>
        <div className="card-input-group">
          <label htmlFor="avatarImg">Avatar Image:</label><input onChange={this.onChange} className="cardHeader" type="text" id="avatarImg" name="avatarImg" value={header.avatarImg}/>
          <label htmlFor="username">Username:</label><input onChange={this.onChange} className="cardHeader" type="text" id="username" name="username" value={header.username}/>
          <label htmlFor="text">Text:</label><input onChange={this.onChange} className="cardHeader" type="text" id="text" name="text" value={header.text}/>
          <label htmlFor="author">Author:</label><input onChange={this.onChange} className="cardHeader" type="text" id="author" name="author" value={header.author}/>
        </div>

        <h2>Card Banner</h2>
        <div className="card-input-group">
          <label htmlFor="bannerIconText">Corner icon text:</label><input onChange={this.onChange} className="cardBanner" type='text'  id="bannerIconText" name="bannerIconText" value={banner.bannerIconText}/>
          <label htmlFor="bannerIconTextColor">Corner icon text color:</label><input onChange={this.onChange} className="cardBanner" type='color' id="bannerIconTextColor" name="bannerIconTextColor" value={banner.bannerIconTextColor}/>
          <label htmlFor="bannerIconColor">Corner icon color:</label><input onChange={this.onChange} className="cardBanner" type="color" id="bannerIconColor" name="bannerIconColor" value={banner.bannerIconColor}/>

          <label htmlFor="text">Text:</label> <textarea onChange={this.onChange} className="cardBanner" row="5" cols="30" id="text" name="text" value={banner.text}/>
          <label htmlFor="textColor">Text color:</label><input onChange={this.onChange} className="cardBanner" type="color" id="textColor" name="textColor" value={banner.textColor}/>
          <label htmlFor="backgroundColor">Background color:</label><input onChange={this.onChange} className="cardBanner" type="color" id="backgroundColor" name="backgroundColor" value={banner.backgroundColor}/>

          <label htmlFor="author">Author:</label><input onChange={this.onChange} className="cardBanner" type='text' id="author" name='author' value={banner.author}/>
          <label htmlFor="authorColor">Author text color:</label><input onChange={this.onChange} className="cardBanner" type="color" id="authorColor" name="authorColor" value={banner.authorColor}/>
          <label htmlFor="authorBackground">Author background color:</label><input onChange={this.onChange} className="cardBanner" type='color' id="authorBackground" name="authorBackground" value={banner.authorBackground}/>
          <label htmlFor="authorImg">Author image:</label><input onChange={this.onChange} className="cardBanner" type="text" id="authorImg" name="authorImg" value={banner.authorImg}/>

          <label htmlFor="title">Title:</label><input onChange={this.onChange} className="cardBanner" type="text" id="title" name="title" value={banner.title}/>
          <label htmlFor="summary">Summary:</label><input onChange={this.onChange} className="cardBanner" type='text' id="summary" name="summary" value={banner.summary}/>
          <label htmlFor="link">Link:</label><input onChange={this.onChange} className="cardBanner" type="text" id="link" name="link" value={banner.link}/>
        </div>
      </div>
    );
  }
}

SocialCardInputs.propTypes = {
  updateHeader: PropTypes.func.isRequired,
  updateBanner: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialCardInputs);