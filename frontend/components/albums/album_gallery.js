import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import { toArray } from '../../reducers/selectors';

class AlbumGallery extends React.Component {
  constructor(props) {
    super(props);

    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentWillMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  handleReturnClick(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.user.username}/albums`);
  }

  handleAddClick(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.user.username}/upload`);
  }

  render () {
    const photos = values(this.props.album.photos);
    const albumOwnerId = this.props.album.user_id;
    const currentUserId = this.props.user.id;

    return(
      <div className="album-gallery-page">
        <div className="album-gallery-container">
          <div className="gallery-buttons">
            <button className="album-index-button" onClick={ this.handleReturnClick }>Albums Index</button>
            { albumOwnerId === currentUserId && (
              <button className="new-photo-button" onClick={ this.handleAddClick }>Add New Photo</button>
            )}
          </div>
          <ul className="album-gallery-list">
            {photos.map((photo) => (
              <div key={photo.id} className="album-gallery-photo">
                <Link to={`/photos/${photo.id}`}>
                  <img src={ photo.img_url }/>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AlbumGallery;
