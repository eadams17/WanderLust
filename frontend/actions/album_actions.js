import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const getAlbums = albums => dispatch => (
  APIUtil.fetchAlbums(albums).then(_albums => (
    dispatch(receiveAlbums(_albums))
  ))
);

export const getAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(album => (
    dispatch(receiveAlbum(album))
  ))
);

export const makeAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(_album => (
    dispatch(receiveAlbum(_album))
  ))
);

export const deleteAlbum = id => dispatch => (
  APIUtil.destroyAlbum(id).then(album => (
    dispatch(removeAlbum(album))
  ))
);
