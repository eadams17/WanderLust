import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { makeAlbum } from '../../actions/album_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  makeAlbum: (album) => dispatch(makeAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm);
