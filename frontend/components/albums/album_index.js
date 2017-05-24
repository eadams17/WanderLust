import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  handleReturnClick(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.match.params.username}`);
  }

  handleAddClick(e) {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.match.params.username}/newalbum`);
  }

  render() {
    const albums = this.props.albums;

    return(
      <div className="album-container">
        <div className="album-index-buttons">
          <button className="dashboard-return-button" onClick={ this.handleReturnClick }>Return To Dashboard</button>
          <button className="new-album-button" onClick={ this.handleAddClick }>Add New Album</button>
        </div>
        <ul className="album-list">
          {albums.map((album) => (
            <div className= "album" key={album.id}>
              <Link to={`/profile/${this.props.match.params.username}/albums/${album.id}`}>
                <h2>{album.title}</h2>
                <img src={ album.thumbnail_url }/>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default AlbumIndex;
