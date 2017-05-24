import { connect } from 'react-redux';
import PhotoStream from './photo_stream';
import { fetchPhotos } from '../../actions/photo_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  photos: toArray(state.photos)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos({current_user: true}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoStream);
