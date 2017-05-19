import { connect } from 'react-redux';
import PhotoStream from './photo_stream';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos,
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoStream);
