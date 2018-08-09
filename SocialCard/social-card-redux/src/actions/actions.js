import { 
  COMMENT,
  LIKE,
  RETWEET,
  UPDATE_HEADER,
  UPDATE_BANNER
} from './action-types';

export const comment = () => ({ type: COMMENT });
export const like    = () => ({ type: LIKE });
export const retweet = () => ({ type: RETWEET });
export const updateHeader = input => ({ type: UPDATE_HEADER, data: input })
export const updateBanner = input => ({ type: UPDATE_BANNER, data: input })


