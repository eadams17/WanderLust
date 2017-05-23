import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { getAlbums } from '../../actions/album_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  albums: toArray(state.albums)
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums({current_user: true}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
