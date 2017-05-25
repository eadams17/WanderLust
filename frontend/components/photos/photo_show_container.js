import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { selectPhoto } from '../../reducers/selectors';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import { fetchPhotoTags } from '../../actions/tag_actions';

const mapStateToProps = (state, { match } ) => {
  const photo = selectPhoto(state.photos, match.params.id);
  return {
    photo,
    user: state.session.currentUser,
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  fetchPhotoTags: (id) => dispatch(fetchPhotoTags(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
