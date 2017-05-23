import {RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO} from '../actions/photo_actions';

const PhotoReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      return Object.assign({}, state, newPhoto);
    case REMOVE_PHOTO:
      const newState = Object.assign({}, state);
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotoReducer;
