import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos();
    this.props.fetchUser(this.props.user.id);
  }

  render() {
    const name = this.props.user.firstname;
    const username = this.props.user.username;
    return(
      <div className="profile-page">
        <div className="welcome-header">
          <h1>Welcome Back, {name}.</h1>
        </div>
        <div className="option-buttons">
          <Link to={`/profile/${username}/photos`}>
            <button className="prof-button">Photo Stream</button>
          </Link>
          <Link to={`/profile/${username}/albums`}>
            <button className="prof-button">Albums</button>
          </Link>
          <Link to={`/profile/${username}/upload`}>
            <button className="prof-button">Upload Photo</button>
          </Link>
          <Link to={`/profile/${username}/newalbum`}>
            <button className="prof-button">Create New Album</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
