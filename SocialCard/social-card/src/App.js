import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import SocialCardInput from './components/SocialCardInputs';
import faker from 'faker';

class App extends Component {
  buildFakeCard = () => {
    const month = faker.date.month().substring(0,3);
    const day = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
    const date = month + ' ' + day;
    const iconText = faker.internet.userName().toUpperCase().substring(0,3);
    const state = {
      cardHeader: {      
        avatarImg: faker.image.avatar(),
        username: faker.internet.userName(),
        text: faker.company.catchPhrase(),
        date: date,
        author: faker.lorem.word(),
      },
      cardBanner: {
        bannerIconText: iconText,
        bannerIconTextColor: faker.internet.color(),
        bannerIconColor: faker.internet.color(),
  
        text: faker.lorem.sentence(),
        textColor: faker.internet.color(),
        backgroundColor: faker.internet.color(),
  
        author: faker.name.findName(),
        authorColor: faker.internet.color(),
        authorBackground: faker.internet.color(),
        authorImg: faker.internet.avatar(),
  
        title: faker.company.catchPhrase(),
        summary: faker.lorem.sentences(),
        link: faker.internet.url()
      },
      cardButtons: {
        comments: faker.random.number(),
        retweet: faker.random.number(),
        likes: faker.random.number(),
  
        commentsClicked: faker.random.boolean(),
        retweetClicked: faker.random.boolean(),
        likesClicked: faker.random.boolean()
      }
    }
    return state;
  }

  state = this.buildFakeCard();

  generateCard = () => {
    console.log('x')
    const state = this.buildFakeCard();
    this.setState({ cardHeader: state.cardHeader, cardBanner: state.cardBanner, cardButtons: state.cardButtons });
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
        <SocialCardInput header={this.state.cardHeader} banner={this.state.cardBanner} onChange={this.onChange} />
        <SocialCard generateCard={this.generateCard} onClick={this.onClick} header={this.state.cardHeader} banner={this.state.cardBanner} buttons={this.state.cardButtons}/>
      </div>
    );
  }
}

export default App;
