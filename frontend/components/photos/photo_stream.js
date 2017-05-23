import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props);

    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  handleReturnClick(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.user.username}`);
  }

  handleAddClick(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.user.username}/upload`);
  }

  render() {
    const photos = values(this.props.user.photos);

    return(
      <div className="photo-stream-page">
        <div className="photo-stream-container">
          <div className="gallery-buttons">
            <button className="album-index-button" onClick={ this.handleReturnClick }>Albums Index</button>
            <button className="new-photo-button" onClick={ this.handleAddClick }>Add New Photo</button>
          </div>
          <ul className="photo-stream-list">
            {photos.map((photo) => (
              <div key={photo.id} className="stream-photo">
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

export default PhotoStream;
