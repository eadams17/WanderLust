import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ProfileContainer from '../profile/profile_container';



class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.loginGuest = this.loginGuest.bind(this);
    this.splashVideo = this.splashVideo.bind(this);
  }

  loginGuest (e) {
    e.preventDefault();
    const guestUser = { email: 'maggiethatch@gmail.com', password: 'password' };
    this.props.login(guestUser).then(
      (res) => this.props.history.push(
        `/profile/${res.currentUser.username}`));
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

  render(){

    if (this.props.currentUser) {
      return(
        <div className="splash">
          <h2 className='splash-phrase1'>Not all those who wander are lost</h2>
          {this.splashVideo()}
        </div>
      );
    } else {
      return(
        <div className='splash'>
          <h2 className='splash-phrase2-1'>Curate a gallery of your travel memories and draw inspiration for forming new ones...</h2>
          <div className='splash-phrase2-2'>
            <button className='splash-button' onClick={this.loginGuest}>Explore Wanderlust</button>
          </div>
          {this.splashVideo()}
        </div>
      );
    }
  }
}

export default withRouter(Splash);
