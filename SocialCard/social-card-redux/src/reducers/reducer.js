import _ from 'lodash';
import {
  COMMENT,
  GENERATE_CARD,
  LIKE,
  RETWEET,
  UPDATE_HEADER,
  UPDATE_BANNER
} from '../actions/action-types';
import { generateFakeCard } from './setInitialState';

const initialState = generateFakeCard();

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
    case GENERATE_CARD:
      const newCard = generateFakeCard();
      newState.cardHeader = newCard.cardHeader;
      newState.cardBanner = newCard.cardBanner;
      newState.cardButtons = newCard.cardButtons;
      return newState;
    default:
      return state;
  }
}

export default appReducer;