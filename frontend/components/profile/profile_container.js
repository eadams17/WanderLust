import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';
import { fetchUser} from '../../actions/user_actions';

const mapStateToProps = ( state ) => ({
  photos: state.photos,
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
