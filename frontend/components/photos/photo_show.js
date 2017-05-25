import React from 'react';
import { values, result } from 'lodash';
import CommentContainer from './comments/comment_container';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.id);
  }

  componentWillMount() {
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
    const photoAlbum = values(this.props.user.albums).filter(album =>
      album.id === photo.album_id)[0];
    const albumName = result(photoAlbum, 'title');
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
            <li className="album-title"><p>{albumName}</p></li>
            <li><img className="photo-display" src={photo.img_url}></img></li>
            <li className="caption"><p>{photo.caption}</p></li>
          </ul>
          <div className='comment-box'>
            <CommentContainer photoOwner={this.props.photo.user_id} photoId={parseInt(this.props.match.params.id)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
