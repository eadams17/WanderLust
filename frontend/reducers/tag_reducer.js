import {RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG} from '../actions/tag_actions';

const TagReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      const newPhoto = {[action.tag.id]: action.tag};
      return Object.assign({}, state, newPhoto);
    default:
      return state;
  }
};

export default TagReducer;
