import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class AlbumGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  render () {
    const photos = values(this.props.album.photos);

    return(
      <div className="album-gallery-page">
        <div className="album-gallery-container">
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
