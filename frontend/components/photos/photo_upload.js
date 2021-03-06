import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { values } from 'lodash';
import Autocomplete from 'react-autocomplete';

const sortStates = (a, b, value) => {
  const aLower = a.tag_name.toLowerCase();
  const bLower = b.tag_name.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
};

const matchStateToTerm = (state, value) => {
  return (
    state.tag_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
};

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      caption: '',
      img_url: '',
      user_id: this.props.user.id,
      album_id: '',
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

  componentWillReceiveProps(newProps) {
    if(this.props.albums.length !== newProps.albums.length) {
      this.setState({album_id: newProps.albums[0].id});
    }
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

  renderButtons() {
    if(this.state.img_url === "") {
      return(
        <button className="upload-button" onClick={this.handleUpload}>Choose Photo</button>
      );
    } else {
      return(
        <div className="preview-submit-container">
          <img className='image-preview'src={this.state.img_url}/>
          <br/>
          <button className="submit-button">Upload Photo</button>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);

    const albums = this.props.albums.filter(album => album.user_id === this.props.user.id);
    const tags = this.props.tags;

    var photoUploadForm = (
      <div className="photo-upload-form">

        <button className="close-button" onClick={() => this.props.history.push(
          `/profile/${this.props.user.username}`)}>X</button>


        <h2>Upload New Photo</h2>

        <input type="text"
          value={this.state.caption}
          placeholder="caption (optional)"
          onChange={this.update('caption')}
          className="photo-form-input"
          />

        <h2>Select Album</h2>

        <select onChange={this.update('album_id')}>

          {albums.map(album => (
            <option key={album.id} value={album.id}>{album.title}</option>
          ))}
        </select> *required <br/>
      <h2>Select Tags (Up to 8)</h2>

          <Autocomplete
            value={this.state.tag_name}
            items={tags}
            inputProps={{ placeholder: 'i.e. "beach"', className: "tag-input"}}
            getItemValue={(tag) => tag.tag_name}
            onChange={(event, value) => this.setState({tag_name: value})}
            onSelect={value => {
              const chosenTags = this.state.tagArray;
              if(chosenTags.length === 8) {
                alert("Maximum amount of tags selected");
              } else if(chosenTags.includes(value)) {
                alert("Tag already selected");
              } else {
                chosenTags.push(value);
                this.setState({tag_name: ''});
              }
            }}
            shouldItemRender={matchStateToTerm}
            sortItems={sortStates}
            renderItem={(tag, isHighlighted) => (
              <div
                className={isHighlighted ? 'highlighted-term' : 'list-term'}
                key={tag.id}
                >{tag.tag_name}</div>
            )}
            />

          <br/>

          <div className="photo-upload-tags-list">
            {this.state.tagArray.map(tag => (
              <p key={tag.id}>#{tag}</p>
            ))}
          </div>

        <br/>

        { this.renderButtons() }
        <br/>
        { this.renderErrors() }
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
