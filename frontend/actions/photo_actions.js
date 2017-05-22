import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotos = photos => dispatch => (
  APIUtil.fetchPhotos(photos).then(_photos => (
    dispatch(receivePhotos(_photos))
  ))
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(_photo => (
    dispatch(receivePhoto(_photo))
  ))
);

export const deletePhoto = id => dispatch => (
  APIUtil.destroyPhoto(id).then(photo => (
    dispatch(removePhoto(photo))
  ))
);
