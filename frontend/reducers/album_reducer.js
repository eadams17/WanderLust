import {RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';

const AlbumReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      const newAlbum = {[action.album.id]: action.album};
      return Object.assign({}, state, newAlbum);
    case REMOVE_ALBUM:
      const newState = Object.assign({}, state);
      delete newState[action.album.id];
      return newState;
    default:
      return state;
  }
};

export default AlbumReducer;
