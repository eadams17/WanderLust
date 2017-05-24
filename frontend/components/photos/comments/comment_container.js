import {connect} from 'react-redux';
import CommentForm from './comment_form';
import { fetchComments, fetchComment, createComment, deleteComment } from '../../../actions/comment_actions';
import { toArray } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comments: toArray(state.comments),
  photoId: ownProps.photoId
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchComments: (data) => dispatch(fetchComments(data)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
