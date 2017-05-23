import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { values } from 'lodash';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      thumbnail_url: 'https://previews.123rf.com/images/hugolacasse/hugolacasse1101/hugolacasse110100110/8626973-Passport-stamps-Stock-Vector-passport-stamp-visa.jpg',
      user_id: this.props.user.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeAlbum(this.state).then(
        (res) => this.props.history.push(
          `/profile/${this.props.user.username}/albums`));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <div className="album-form-errors">
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

    var albumUploadForm = (
      <div className="album-create-form">

        <button className="close-button" onClick={() => this.props.history.push(
          `/profile/${this.props.user.username}`)}>X</button>


        <h2>Create New Album</h2>

        <input type="text"
          value={this.state.title}
          placeholder="title"
          onChange={this.update('title')}
          className="album-form-input"
          />

        <input type="text"
          value={this.state.description}
          placeholder="description (optional)"
          onChange={this.update('description')}
          className="album-form-input"
          />

        <br/>

        <button className="submit-button">Create Album</button>
      </div>
    );

    console.log(this.props.errors);

    return (
      <div className="album-form-page">
        <form onSubmit={this.handleSubmit} className="album-form-box">
          { this.renderErrors() }
          { albumUploadForm }
        </form>
      </div>
    );
  }
}

export default withRouter(AlbumForm);
