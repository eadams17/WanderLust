import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          { loginform }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
