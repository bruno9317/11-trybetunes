/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const {
      musicName,
      previewUrl,
      trackId,
      onInputClick,
      isChecked,
    } = this.props;
    return (
      <div className="musicCard rounded-start rounded-end">
        <div className="corpoCTitulo">
          <h3 className="card-title">{musicName}</h3>
          <div className="corpoSTitulo">
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
            </audio>
            <label htmlFor={ trackId }>
              <input
                type="checkbox"
                id={ trackId }
                name="Favorites"
                data-testid={ `checkbox-music-${trackId}` }
                onClick={ onInputClick }
                defaultChecked={ isChecked }
              />
              Favorita
            </label>
          </div>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  // albumImage: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onInputClick: PropTypes.func.isRequired,
};
