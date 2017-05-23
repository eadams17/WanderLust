import * as APIUtil from '../util/album_api_util';
import { receiveErrors } from '../actions/error_actions';

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
  APIUtil.fetchAlbums(albums).then(
    (_albums => dispatch(receiveAlbums(_albums))),
    errors => dispatch(receiveErrors(errors.responseJSON))
));

export const getAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(
    (album => dispatch(receiveAlbum(album))),
    errors => dispatch(receiveErrors(errors.responseJSON))
));

export const makeAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(
    (_album => dispatch(receiveAlbum(_album))),
    errors => dispatch(receiveErrors(errors.responseJSON))
));

export const deleteAlbum = id => dispatch => (
  APIUtil.destroyAlbum(id).then(
    (album => dispatch(removeAlbum(album))),
    errors => dispatch(receiveErrors(errors.responseJSON))
));
