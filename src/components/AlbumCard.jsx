import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AlbumCard extends Component {
  render() {
    const { albumImage, albumName, artistName, collectionId } = this.props;
    return (
      <div className="divLink">
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
          className="LinkAlbum"
        >
          <div className="AlbumCard">
            <img src={ albumImage } alt={ albumName } />
            <div>
              <h2>{ albumName }</h2>
              <h6>{ artistName }</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  albumImage: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
