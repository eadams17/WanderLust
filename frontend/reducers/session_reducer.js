import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, {
        currentUser
      });
    default:
      return state;
  }
};

export default SessionReducer;
