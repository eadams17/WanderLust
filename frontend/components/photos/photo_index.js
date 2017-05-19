import React from 'react';
import { values, pick } from 'lodash';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    const photos = values(this.props.photos);
    return(
      <div className="photo-container">
        <ul className="photo-list">
          {photos.map((photo) => (
            <img className= "photo" key={photo.id} src={ photo.img_url }/>
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
