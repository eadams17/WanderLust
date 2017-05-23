
import { connect } from 'react-redux';
import AlbumGallery from './album_gallery';
import { getAlbum } from '../../actions/album_actions';
import { selectAlbum } from '../../reducers/selectors';

const mapStateToProps = (state, { match } ) => {
  const album = selectAlbum(state.albums, match.params.id);
  return {
    album,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  getAlbum: (id) => dispatch(getAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumGallery);
