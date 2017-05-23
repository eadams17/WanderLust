import React from 'react';
import { values, pick } from 'lodash';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  componentWillMount() {
    this.props.getAlbums();
  }

  render() {
    const user = this.props.match.params.username;
    const albums = values(this.props.albums);
    return(
      <div className="album-container">
        <ul className="album-list">
          {albums.map((album) => (
            <div className= "album" key={album.id}>
              <Link to={`/profile/${user}/albums/${album.id}`}>
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
