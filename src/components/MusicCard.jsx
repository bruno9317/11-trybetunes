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
      albumImage,
    } = this.props;
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ albumImage }
              alt={ musicName }
              className="rounded-start"
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-md-8">
            <div className="cardOthers">
              <h3 className="card-title">{musicName}</h3>
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
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  albumImage: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onInputClick: PropTypes.func.isRequired,
};
