import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { selectAlbum } from '../../reducers/selectors';
import { getAlbum, deleteAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, { match } ) => {
  const album = selectAlbum(state.albums, match.params.id);
  return {
    album,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  getAlbum: (id) => dispatch(getAlbum(id)),
  deleteAlbum: (id) => dispatch(deleteAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
