import React from 'react';
import { values } from 'lodash';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
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

  render() {
    const photo = this.props.photo;
    const user = this.props.user;
    console.log(this.props);
    return(
      <div className="photo-show-page">
        <div className="photo-display-container">
          {user.id === photo.user_id && (
            <button className="delete-button" onClick={this.handleDelete}>Delete</button>
          )}
          <ul>
            <li><p>{photo.title}</p></li>
            <li><img className="photo-display" src={photo.img_url}></img></li>
            <li><p>{photo.caption}</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
