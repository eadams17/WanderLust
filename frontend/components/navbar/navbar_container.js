import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { fetchTags } from '../../actions/tag_actions';
import { fetchPhotos } from '../../actions/photo_actions';
import { toArray } from '../../reducers/selectors';
import Navbar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  tags: toArray(state.tags)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  fetchTags: () => dispatch(fetchTags()),
  fetchPhotos: (tagId) => dispatch(fetchPhotos({tag_id: tagId}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
