import React from 'react';
import { values, pick } from 'lodash';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
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
    const photos = values(this.props.photos);
    return(
      <div className="photo-container">
        <ul className="photo-list">
          {photos.map((photo) => (
            <div className= "photo" key={photo.id}>
              <Link to={`/photos/${photo.id}`}>
                <img src={ photo.img_url }/>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
