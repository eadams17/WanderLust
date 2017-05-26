import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { createPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { getAlbums } from '../../actions/album_actions';
import { fetchTags, createPhotoTag } from '../../actions/tag_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  user: state.session.currentUser,
  errors: state.errors,
  albums: toArray(state.albums),
  tags: toArray(state.tags)
});

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  getAlbums: () => dispatch(getAlbums({current_user: true})),
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
