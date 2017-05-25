import * as APIUtil from '../util/tag_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const fetchPhotoTags = id => dispatch => (
  APIUtil.fetchPhotoTags(id).then(
    (tags => dispatch(receiveTags(tags))),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags().then(
    (tags => dispatch(receiveTags(tags))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const fetchTag = id => dispatch => (
  APIUtil.fetchTag(id).then(
    (tag => dispatch(receiveTag(tag))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const createTag = tag => dispatch => (
  APIUtil.createTag(tag).then(
    (_tag => dispatch(receiveTag(_tag))),
    err => dispatch(receiveErrors(err.responseJSON))
));
