/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteMusicCard extends Component {
  render() {
    const {
      musicName,
      previewUrl,
      trackId,
      onInputClick,
      // isChecked,
      albumImage,
    } = this.props;
    return (
      <div className="musicCard rounded-start rounded-end">
        <img
          src={ albumImage }
          alt={ musicName }
          className="rounded-start"
          // width="50px"
          height="100%"
        />
        <div>
          <h3>{musicName}</h3>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
          </audio>
        </div>
        <label htmlFor={ trackId }>
          <input
            type="checkbox"
            id={ trackId }
            name="favorites"
            data-testid={ `checkbox-music-${trackId}` }
            onClick={ onInputClick }
            defaultChecked
          />
          Favorita
        </label>
      </div>
    );
  }
}

FavoriteMusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  albumImage: PropTypes.string.isRequired,
  onInputClick: PropTypes.func.isRequired,
};
