import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
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

const searchBar = (fetchTags, tags, update, search_term, handleTagId) => (
  <div className="nav-middle">
    <i id="search-icon" className="fa fa-search"></i>
    <Autocomplete
      value={search_term}
      items={tags}
      inputProps={{ placeholder: 'search for photos by tags (i.e. "beach")', className: "search-input"}}
      getItemValue={(tag) => tag.tag_name}
      onChange={(e) => update(e)}
      onSelect={ value => {
        const returnTagId = tags.filter(tag => tag.tag_name === value)[0].id;
        handleTagId(returnTagId);
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
  </div>
);

const privateNav = (currentUser, logout, fetchTags, tags,
   update, search_term, handleTagId, explore) => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/photos" className="logo-link">
        <h1 className="logo-text">WanderLust</h1>
      </Link>
    </div>
    { searchBar(fetchTags, tags, update, search_term, handleTagId) }
    <div className="nav-right">
      <Link to={`/profile/${currentUser.username}`}>
        <p className="profile-link">Profile</p>
      </Link>
      <a onClick={explore}>
        <p className="explore-link">Explore</p>
      </a>
      <button className='logout' onClick={ () => logout() }>Sign Out</button>
    </div>
  </div>
);

const publicNav = (login, guestUser, history, fetchTags, tags,
   update, search_term, handleTagId) => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/" className="logo-link">
        <h1 className="logo-text">WanderLust</h1>
      </Link>
    </div>
    <div className="nav-right">
      <button className="guest-login" onClick={() => login(guestUser).then(
          (res) => history.push(
            '/photos'))}>Guest</button>
          <Link to="/login">
            <p className="sign-in">Sign In</p>
          </Link>
          <Link to="/register">
            <p className="register">Register</p>
          </Link>
        </div>
      </div>
    );


class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search_term: ''
    };
    this.update = this.update.bind(this);
    this.handleTagId = this.handleTagId.bind(this);
    this.explore = this.explore.bind(this);
  }

  componentWillMount() {
    this.props.fetchTags();
  }

  update(e) {
    this.setState({search_term: e.currentTarget.value});
  }

  handleTagId(tagId) {
    this.props.fetchPhotos(tagId).then(
      this.props.history.push(`/photos?query=${tagId}`)
    );
  }

  explore() {
    this.props.fetchPhotos().then(() => (
      this.props.history.push('/photos')
    ));
  }


  render() {

    const guestUser = { email: 'maggiethatch@gmail.com', password: 'password' };
    const { history, currentUser, login, logout, fetchTags, tags } = this.props;

    return(
      <div>
        {(currentUser) ? (
          privateNav(currentUser, logout, fetchTags, tags,
            this.update, this.state.search_term, this.handleTagId, this.explore
          )) : (
            publicNav(login, guestUser, history, fetchTags, tags,
              this.update, this.state.search_term, this.handleTagId, this.explore
            )
          )}
      </div>
    );
  }
}

export default withRouter(Navbar);
