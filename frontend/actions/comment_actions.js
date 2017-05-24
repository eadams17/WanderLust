import * as APIUtil from '../util/comment_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComments = data => dispatch => (
  APIUtil.fetchComments(data).then(
    (comments => dispatch(receiveComments(comments))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const fetchComment = id => dispatch => (
  APIUtil.fetchComment(id).then(
    (comment => dispatch(receiveComment(comment))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(
    (_comment => dispatch(receiveComment(_comment))),
    err => dispatch(receiveErrors(err.responseJSON))
));

export const deleteComment = id => dispatch => (
  APIUtil.destroyComment(id).then(
    (comment => dispatch(removeComment(comment))),
    err => dispatch(receiveErrors(err.responseJSON))
));
