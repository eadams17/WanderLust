import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import AlbumReducer from './album_reducer';
import CommentReducer from './comment_reducer';
import ErrorReducer from './error_reducer';
import TagReducer from './tag_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  albums: AlbumReducer,
  comments: CommentReducer,
  errors: ErrorReducer,
  tags: TagReducer
});

export default rootReducer;
