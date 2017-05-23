import React from 'react';
import { values } from 'lodash';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  handleDelete(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to delete your album?")) {
      this.props.deleteAlbum(this.props.album.id);
      this.props.history.push(`/profile/${this.props.user.username}/albums`);
    }
  }

  handleReturn(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  handleView(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.user.username}/albums/${this.props.album.id}/photos`);
  }

  render() {
    const album = this.props.album;
    const user = this.props.user;
    return(
      <div className="album-show-page">
        <div className="album-display-container">
          <div className="album-show-buttons">
            <button className="return-button" onClick={this.handleReturn}>Back To Index</button>
            <button className="gallery-button" onClick={this.handleView}>View Album</button>
            {user.id === album.user_id && (
              <button className="delete-button" onClick={this.handleDelete}>Delete</button>
            )}
          </div>
          <ul>
            <li className="album-title"><p>{album.title}</p></li>
            <li><img className="album-display" src={album.thumbnail_url}></img></li>
            <li className="caption"><p>{album.description}</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
