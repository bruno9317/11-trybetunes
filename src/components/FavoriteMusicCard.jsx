import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteMusicCard extends Component {
  render() {
    const {
      musicName,
      previewUrl,
      trackId,
      onInputClick,
      isChecked,
    } = this.props;
    return (
      <div>
        <h1>{musicName}</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
        </audio>
        <label htmlFor={ trackId }>
          <input
            type="checkbox"
            id={ trackId }
            name="favorites"
            data-testid={ `checkbox-music-${trackId}` }
            onClick={ onInputClick }
            defaultChecked={ isChecked }
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
  isChecked: PropTypes.bool.isRequired,
  onInputClick: PropTypes.func.isRequired,
};
