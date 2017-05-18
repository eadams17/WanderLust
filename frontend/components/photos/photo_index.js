import React from 'react';
import { values } from 'lodash';

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
        {photos.map((photo) => (
          <ul className= "photo-list">
            <img className= "photo" key={photo.id} src={ photo.img_url }/>
          </ul>
        ))}
      </div>
    );
  }
}

export default PhotoIndex;
