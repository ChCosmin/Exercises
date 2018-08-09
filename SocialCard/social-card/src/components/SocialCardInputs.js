import React from 'react';
import './SocialCardInputs.css'

class SocialCardInputs extends React.Component {

  render() {
    return (
      <div className="card-inputs">
        <h2>Card Header</h2>
        <div className="card-input-group">
          <label>Avatar Image:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="avatarImg" />
          <label>Username:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="username" />
          <label>Text:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="text" />
          <label>Author:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="author" />
        </div>

        <h2>Card Banner</h2>
        <div className="card-input-group">
          <label>Corner icon text:</label><input onChange={this.props.onChange} className="cardBanner" type='text' name="bannerIconText" />
          <label>Corner icon text color:</label><input onChange={this.props.onChange} className="cardBanner" type='color' name="bannerIconTextColor" />
          <label>Corner icon color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="bannerIconColor" />

          <label>Text:</label><textarea onChange={this.props.onChange} className="cardBanner" row="5" cols="30" name="text"></textarea>
          <label>Text color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="textColor" />
          <label>Background color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="backgroundColor" />

          <label>Author:</label><input onChange={this.props.onChange} className="cardBanner" type='text' name='author' />
          <label>Author text color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="authorColor" />
          <label>Author background color:</label><input onChange={this.props.onChange} className="cardBanner" type='color' name="authorBackground" />
          <label>Author image:</label><input onChange={this.props.onChange} className="cardBanner" type="text" name="authorImg" />

          <label>Title:</label><input onChange={this.props.onChange} className="cardBanner" type="text" name="title" />
          <label>Summary:</label><input onChange={this.props.onChange} className="cardBanner" type='text' name="summary" />
          <label>Link:</label><input onChange={this.props.onChange} className="cardBanner" type="text" name="link" />
        </div>
      </div>
    );
  }
}

export default SocialCardInputs;