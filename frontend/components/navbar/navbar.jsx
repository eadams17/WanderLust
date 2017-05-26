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

const searchBar = (fetchTags, tags, update, search_term) => (
  <div className="nav-middle">
    <label className="search-input-label">Search</label>
    <Autocomplete
      value={search_term}
      items={tags}
      inputProps={{ placeholder: 'search for tags (i.e. "beach")', className: "search-input"}}
      getItemValue={(tag) => tag.tag_name}
      onChange={(e) => update(e)}
      onSelect={ value => {
        this.setState({search_term: value});
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

const privateNav = (currentUser, logout, fetchTags, tags, update, search_term, setState) => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/" className="logo-link">
        <h1 className="logo-text">WanderLust</h1>
      </Link>
    </div>
    { searchBar(fetchTags, tags, update, search_term) }
    <div className="nav-right">
      <Link to={`/profile/${currentUser.username}`}>
        <p className="profile-link">Profile</p>
      </Link>
      <Link to="/photos">
        <p className="explore-link">Explore</p>
      </Link>
      <button className='logout' onClick={ logout }>Sign Out</button>
    </div>
  </div>
);

const publicNav = (login, guestUser, history, fetchTags, tags, update, search_term) => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/" className="logo-link">
        <h1 className="logo-text">WanderLust</h1>
      </Link>
    </div>
    { searchBar(fetchTags, tags, update, search_term) }
    <div className="nav-right">
      <button className="guest-login" onClick={() => login(guestUser).then(
          (res) => history.push(
            `/profile/${res.currentUser.username}`))}>Guest</button>
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
  }

  componentWillMount() {
    this.props.fetchTags();
  }

  update(e) {
    this.setState({search_term: e.currentTarget.value});
  }

  render() {

    const guestUser = { email: 'drtobogan@gmail.com', password: 'password' };
    const { history, currentUser, login, logout, fetchTags, tags } = this.props;
    console.log(this.state);

    return(
      <div>
        {(currentUser) ? (
          privateNav(currentUser, logout, fetchTags, tags,
            this.update, this.state.search_term
          )) : (
            publicNav(login, guestUser, history, fetchTags, tags,
              this.update, this.state.search_term)
          )}
      </div>
    );
  }
}

export default withRouter(Navbar);
