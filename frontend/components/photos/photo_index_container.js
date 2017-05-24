import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photo_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  photos: toArray(state.photos)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
