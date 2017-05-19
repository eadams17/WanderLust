import React from 'react';
import { values } from 'lodash';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props);
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
              <img className= "stream-photo" key={photo.id} src={ photo.img_url }/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoStream;
