import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import SocialCardInput from './components/SocialCardInputs';

class App extends Component {
  state={
    cardHeader: {      
      avatarImg: 'http://icons.iconarchive.com/icons/martz90/circle/256/9gag-icon.png',
      username: 'The Practical Dev',
      text: 'Learning React? Start Small.',
      date: 'Sep 10',
      author: 'dceddia',
    },
    cardBanner: {
      bannerIconText: 'DEV',
      bannerIconTextColor: '#ffffff',
      bannerIconColor: '#000000',

      text: 'Learning React? Start Small. Learning React? Start Small.Learning React? Start.',
      textColor: '#ffffff',
      backgroundColor: '#ffa003',

      author: 'Chinde Cosmin Aurel',
      authorColor: "#ffa003",
      authorBackground: "#ffffff",
      authorImg: 'https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/31699070_10215402312226896_6192456887863083008_n.jpg?_nc_cat=0&oh=9ff762f295393831b4ff7a5af56d8bdc&oe=5BC77113',

      title: 'Learning React? Start Small',
      summary: 'Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps. Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps. Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps. Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps.',
      link: 'http://www.google.com'
    },
    cardButtons: {
      comments: 2,
      retweet: 47,
      likes: 190,

      commentsClicked: false,
      retweetClicked: false,
      likesClicked: false
    }
  }

  onClick = (e) => {
    const { cardButtons } = this.state;
    let clicked = e.target.name + "Clicked";
    if(cardButtons[clicked]){
      let value = this.state.cardButtons[e.target.name] - 1;
      this.setState({ cardButtons: { ...this.state.cardButtons, [clicked]: false, [e.target.name]: value} });
    } else {
      let value = this.state.cardButtons[e.target.name] + 1 ;     
      this.setState({ cardButtons: { ...this.state.cardButtons, [clicked]: true, [e.target.name]: value} });    
    }
  }

  onChange = (e) => {
    const value = e.target.value.replace(/\s+/, "");
    if(value === '') {
      const message = e.target.name + ' can\'t be blank';
      alert(message);
    } else {
      this.setState({ [e.target.className]: { ...this.state[e.target.className], [e.target.name]: e.target.value} })
    }
  }


  render() {
    return (
      <div className="App">
        <SocialCardInput onChange={this.onChange} />
        <SocialCard onClick={this.onClick} header={this.state.cardHeader} banner={this.state.cardBanner} buttons={this.state.cardButtons}/>
      </div>
    );
  }
}

export default App;
