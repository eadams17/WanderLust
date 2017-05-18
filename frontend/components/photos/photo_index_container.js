import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
