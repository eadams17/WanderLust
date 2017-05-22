import React from 'react';
import { values } from 'lodash';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.id);
  }

  handleDelete(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to delete your photo?")) {
      this.props.deletePhoto(this.props.photo.id);
      this.props.history.push('/photos');
    }
  }

  handleReturn(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const photo = this.props.photo;
    const user = this.props.user;
    return(
      <div className="photo-show-page">
        <div className="photo-display-container">
          <div className="photo-show-buttons">
            <button className="return-button" onClick={this.handleReturn}>Back To Index</button>
            {user.id === photo.user_id && (
              <button className="delete-button" onClick={this.handleDelete}>Delete</button>
            )}
          </div>
          <ul>
            <li><p>{photo.title}</p></li>
            <li><img className="photo-display" src={photo.img_url}></img></li>
            <li className="caption"><p>{photo.caption}</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
