import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.splashVideo = this.splashVideo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      (res) => this.props.history.push(
        '/photos'));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  splashVideo() {
    return (
      <div className="splash-video">
        <video
          controls muted
          autoPlay="autoplay"
          loop="loop">
          <source
            className="mp4"
            type="video/mp4"
            src="https://res.cloudinary.com/explorewanderlust/video/upload/v1497557744/splash_video_g5tvoy.mp4" />
        </video>
      </div>
    );
  }

  renderErrors() {
    return(
      <div className="form-errors">
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

    var path = this.props.match.path;

    if(path==='/login') {

      var loginform = (
        <div className="login-form">
          <br/>

          <input type="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.update('email')}
            className="login-input"
            />

          <br/>

          <input type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.update('password')}
            className="login-input"
            />

          <br/>
          <input type="submit" value="Submit" />
        </div>
      );

    } else {

      var loginform = (
        <div className="register-form">
          <br/>

          <input type="text"
            value={this.state.firstname}
            placeholder="first name"
            onChange={this.update('firstname')}
            className="login-input"
            />

          <input type="text"
            value={this.state.lastname}
            placeholder="last name"
            onChange={this.update('lastname')}
            className="login-input"
            />

          <input type="text"
            value={this.state.username}
            placeholder="username"
            onChange={this.update('username')}
            className="login-input"/>

          <input type="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.update('email')}
            className="login-input"
            />

          <br/>

          <input type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.update('password')}
            className="login-input"
            />

          <br/>
          <input type="submit" value="Submit" />
        </div>
      );
    }

    return (
      <div className="auth-page">
        {this.splashVideo()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          { loginform }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
