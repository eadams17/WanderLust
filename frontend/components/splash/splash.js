import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ProfileContainer from '../profile/profile_container';



class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.loginGuest = this.loginGuest.bind(this);
  }

  loginGuest (e) {
    e.preventDefault();
    const guestUser = { email: 'maggiethatch@gmail.com', password: 'password' };
    this.props.login(guestUser).then(
      (res) => this.props.history.push(
        `/profile/${res.currentUser.username}`));
  }

  render(){

    if (this.props.currentUser) {
      return(
        <div className="splash">
          <h2 className='splash-phrase1'>Not all those who wander are lost</h2>
        </div>
      );
    } else {
      return(
        <div className='splash'>
          <h2 className='splash-phrase2-1'>Curate a gallery of your travel memories and draw inspiration for forming new ones...</h2>
          <div className='splash-phrase2-2'>
            <button className='splash-button' onClick={this.loginGuest}>Explore Wanderlust</button>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Splash);
