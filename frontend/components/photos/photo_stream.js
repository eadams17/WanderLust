import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    const userId = this.props.user.id;
    const photos = values(this.props.photos).filter(photo =>
      photo.user_id === userId);

    return(
      <div className="photo-stream-page">
        <div className="photo-stream-container">
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
