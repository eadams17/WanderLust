import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.location.search) {
      this.props.fetchPhotos();
    }
  }

  render() {
    const photos = this.props.photos;
    return(
      <div className="photo-container">
        <div className="photo-list">
          {photos.map((photo) => (
            <div className= "photo" key={photo.id}>
              <Link to={`/photos/${photo.id}`}>
                <img src={ photo.img_url }/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoIndex);
