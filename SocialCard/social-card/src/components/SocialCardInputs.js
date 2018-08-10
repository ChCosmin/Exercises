import React from 'react';
import './SocialCardInputs.css'

class SocialCardInputs extends React.Component {

  render() {
    const { header, banner } = this.props;
    return (
      <div className="card-inputs">
        <h2>Card Header</h2>
        <div className="card-input-group">
          <label>Avatar Image:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="avatarImg" value={header.avatarImg}/>
          <label>Username:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="username" value={header.username}/>
          <label>Text:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="text" value={header.text}/>
          <label>Author:</label><input onChange={this.props.onChange} className="cardHeader" type="text" name="author" value={header.author}/>
        </div>

        <h2>Card Banner</h2>
        <div className="card-input-group">
          <label>Corner icon text:</label><input onChange={this.props.onChange} className="cardBanner" type='text' name="bannerIconText" value={banner.bannerIconText}/>
          <label>Corner icon text color:</label><input onChange={this.props.onChange} className="cardBanner" type='color' name="bannerIconTextColor" value={banner.bannerIconTextColor}/>
          <label>Corner icon color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="bannerIconColor" value={banner.bannerIconColor}/>

          <label>Text:</label><textarea onChange={this.props.onChange} className="cardBanner" row="5" cols="30" name="text" value={banner.text}></textarea>
          <label>Text color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="textColor" value={banner.textColor}/>
          <label>Background color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="backgroundColor" value={banner.backgroundColor}/>

          <label>Author:</label><input onChange={this.props.onChange} className="cardBanner" type='text' name='author' value={banner.author}/>
          <label>Author text color:</label><input onChange={this.props.onChange} className="cardBanner" type="color" name="authorColor" value={banner.authorColor}/>
          <label>Author background color:</label><input onChange={this.props.onChange} className="cardBanner" type='color' name="authorBackground" value={banner.authorBackground}/>
          <label>Author image:</label><input onChange={this.props.onChange} className="cardBanner" type="text" name="authorImg" value={banner.authorImg}/>

          <label>Title:</label><input onChange={this.props.onChange} className="cardBanner" type="text" name="title" value={banner.title}/>
          <label>Summary:</label><input onChange={this.props.onChange} className="cardBanner" type='text' name="summary" value={banner.summary}/>
          <label>Link:</label><input onChange={this.props.onChange} className="cardBanner" type="text" name="link" value={banner.link}/>
        </div>
      </div>
    );
  }
}

export default SocialCardInputs;