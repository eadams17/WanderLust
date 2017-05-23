import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { getAlbums } from '../../actions/album_actions';

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
