import React from 'react';
import { values, result } from 'lodash';
import CommentContainer from './comments/comment_container';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  componentWillMount() {
    this.props.fetchPhoto(this.props.match.params.id);
  }

  handleDelete(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to delete your photo?")) {
      this.props.deletePhoto(this.props.photo.id);
      this.props.history.push(`/profile/${this.props.user.username}`);
    }
  }

  handleReturn(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const tags = this.props.photo.tags;
    const photo = this.props.photo;
    const user = this.props.user;

    const photoUser = (this.props.photo.user ? this.props.photo.user.username : "");
    const albumName = (this.props.photo.album ? this.props.photo.album.title : "");

    return(
      <div className="photo-show-page">
        <div className="display-container">
          <div className= "left-container">
            <div className= "tags-container">
              {tags.map(tag => (
                <li key={tag.id}>#{tag.tag_name}</li>
              ))}
            </div>
            <div className='comment-box'>
              <CommentContainer photoOwner={this.props.photo.user_id} photoId={parseInt(this.props.match.params.id)}/>
            </div>
          </div>
          <div className="photo-display-container">
            <div className="photo-show-buttons">
              <button className="return-button" onClick={this.handleReturn}>Back To Index</button>
              {user.id === photo.user_id && (
                <button className="delete-button" onClick={this.handleDelete}>Delete</button>
              )}
            </div>
            <ul>
              <li className="album-title"><p>{albumName} by {photoUser}</p></li>
              <li><img className="photo-display" src={photo.img_url}></img></li>
              <li className="caption"><p>{photo.caption}</p></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
