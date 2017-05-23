import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { values } from 'lodash';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      caption: '',
      img_url: '',
      user_id: this.props.user.id,
      album_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.cloudinary_options, (errors, images) => {
      if(errors === null){
        const photo_url = images[0].url;
        this.setState({img_url: photo_url});
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state).then(
        (res) => this.props.history.push(
          `/profile/${this.props.user.username}/albums/${res.photo.album_id}/photos`));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <div className="photo-form-errors">
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const albums = values(this.props.user.albums);

    var photoUploadForm = (
      <div className="photo-upload-form">

        <button className="close-button" onClick={() => this.props.history.push(
          `/profile/${this.props.user.username}`)}>X</button>


        <h2>Upload New Photo</h2>

        <input type="text"
          value={this.state.title}
          placeholder="title (optional)"
          onChange={this.update('title')}
          className="photo-form-input"
          />

        <input type="text"
          value={this.state.caption}
          placeholder="caption (optional)"
          onChange={this.update('caption')}
          className="photo-form-input"
          />

        <br/>

        <select onChange={this.update('album_id')}>
          {albums.map(album => (
            <option key={album.id} value={album.id}>{album.title}</option>
          ))}
        </select>

        <br/>

        {this.state.img_url === "" ? <button className="upload-button" onClick={this.handleUpload}>Choose Photo</button> :
        <img className='image-preview'src={this.state.img_url}/>}
        <br/>
        <button className="submit-button">Upload Photo</button>
      </div>
    );

    return (
      <div className="photo-upload-page">
        <form onSubmit={this.handleSubmit} className="upload-form-box">
          { photoUploadForm }
        </form>
      </div>
    );
  }
}

export default withRouter(PhotoUpload);
