import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';



class Splash extends React.Component {
  constructor(props) {
    super(props);
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
          <h2 className='splash-phrase2'>Curate a gallery of your travel memories and draw inspiration for forming new ones...</h2>
          <h2 className='splash-phrase2'>Explore Wanderlust</h2>
        </div>
      );
    }
  }
}

export default Splash;
