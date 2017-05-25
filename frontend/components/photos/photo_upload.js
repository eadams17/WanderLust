import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { values } from 'lodash';
import Autocomplete from 'react-autocomplete';

export let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default',
    border: 'solid 1px black'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px black'
  }
};

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    const albums = this.props.user.albums;
    console.log(albums);
    this.state = {
      title: '',
      caption: '',
      img_url: '',
      user_id: this.props.user.id,
      album_id: albums.length === 0 ? "" : albums[0].id,
      tag_name: '',
      tagArray: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillMount() {
    this.props.getAlbums();
    this.props.fetchTags();
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
    this.state.tagArray.forEach(tag => (
      this.props.createPhotoTag(tag)
    ));
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

    const albums = this.props.albums.filter(album => album.user_id === this.props.user.id);
    const tags = this.props.tags;

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

        <br/><br/>

        <select onChange={this.update('album_id')}>
          {albums.map(album => (
            <option key={album.id} value={album.id}>{album.title}</option>
          ))}
        </select> *required <br/><br/>
      <div className="tag-input">
          <Autocomplete
            value={this.state.tag_name}
            items={tags}
            getItemValue={(tag) => tag.tag_name}
            onChange={(event, value) => this.setState({tag_name: value})}
            onSelect={value => {
              this.state.tagArray.push(value);
              this.setState({tag_name: value});
            }}
            renderItem={(tag, isHighlighted) => (
              <div
                style={isHighlighted ? styles.highlightedItem : styles.tag}
                key={tag.id}
                >{tag.tag_name}</div>
            )}
            />
        </div>

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
          { this.renderErrors() }
          { photoUploadForm }
        </form>
      </div>
    );
  }
}

export default withRouter(PhotoUpload);
