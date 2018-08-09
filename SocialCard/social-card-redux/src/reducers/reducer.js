import _ from 'lodash';
import {
  COMMENT,
  LIKE,
  RETWEET,
  UPDATE_HEADER,
  UPDATE_BANNER
} from '../actions/action-types';

const initialState = {
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

const appReducer = ( state = initialState, action ) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case UPDATE_HEADER:
      newState.cardHeader[action.data.name] = action.data.value;
      return newState;
    case UPDATE_BANNER:
      newState.cardBanner[action.data.name] = action.data.value;
      return newState;
    case COMMENT:
      newState.cardButtons.commentsClicked = !state.cardButtons.commentsClicked;
      if(newState.cardButtons.commentsClicked) {
        newState.cardButtons.comments += 1;
      } else {
        newState.cardButtons.comments -= 1;
      }
      return newState;
    case LIKE:
      newState.cardButtons.likesClicked = !state.cardButtons.likesClicked;
      if(newState.cardButtons.likesClicked) {
        newState.cardButtons.likes += 1;
      } else {
        newState.cardButtons.likes -= 1;
      }
      return newState;
    case RETWEET: 
      newState.cardButtons.retweetClicked = !state.cardButtons.retweetClicked;
      if(newState.cardButtons.retweetClicked) {
        newState.cardButtons.retweet += 1;
      } else {
        newState.cardButtons.retweet -= 1;
      }
      return newState;
    default:
      return state;
  }
}

export default appReducer;