import { connect } from 'react-redux';
import PhotoUpload from './photo_upload';
import { createPhoto } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos,
  errors: state.errors,
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
