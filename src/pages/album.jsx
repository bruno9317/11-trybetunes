import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

export default class album extends Component {
  state = {
    nomeDaBanda: '',
    nomeDoAlbum: '',
    albumCover: '',
    isLoading: false,
    album1: [],
    album2: [],
    favoritasAnteriores: [],
    favoritesToLoad: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const receba = await getMusics(id);
    this.setState({
      album1: receba,
      albumCover: receba[0].artworkUrl100,
      nomeDaBanda: receba[0].artistName,
      nomeDoAlbum: receba[0].collectionName,
      favoritasAnteriores: await getFavoriteSongs(),
    }, async () => {
      const { album1, favoritasAnteriores } = this.state;
      const album2 = album1.filter((p) => p.trackId);
      this.setState({ album2 });
      const receba1 = album2.map((p) => p.trackId);
      const receba2 = favoritasAnteriores.map((p) => p.trackId);
      const favoritesToLoad = [];
      for (let index = 0; index < receba2.length; index += 1) {
        for (let index2 = 0; index2 < receba1.length; index2 += 1) {
          if (receba2[index] === receba1[index2]) {
            favoritesToLoad.push(receba2[index]);
          }
        }
      }
      this.setState({ favoritesToLoad });
    });
    this.setState({ isLoading: false });
  }

  async componentDidUpdate() {
    const listaDeMusicas2 = await getFavoriteSongs();
    this.setState({ favoritesToLoad: listaDeMusicas2 });
  }

  onInputClick = async (event) => {
    const { target } = event;
    const response = await getMusics(target.id);
    if (target.checked === true) {
      addSong(response[0]);
    } else {
      removeSong(response[0]);
    }
    // window.location.reload(false);
  };

  render() {
    const {
      album2,
      albumCover,
      nomeDaBanda,
      nomeDoAlbum,
      isLoading,
      favoritesToLoad } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { isLoading ? <Loading /> : (
          <div className="fullAlbum">
            <div className="mostraAlbum">
              <img
                src={ albumCover }
                alt={ nomeDaBanda }
                height="250px"
              />
              <h1 data-testid="album-name">{ nomeDoAlbum }</h1>
              <h5 data-testid="artist-name">{nomeDaBanda}</h5>
            </div>
            <div className="listaDeMusicas">
              { album2.map((p, index) => (<MusicCard
                key={ index }
                musicName={ p.trackName }
                previewUrl={ p.previewUrl }
                // albumImage={ p.artworkUrl100 }
                trackId={ `${p.trackId}` }
                isChecked={ favoritesToLoad.includes(p.trackId) }
                onInputClick={ this.onInputClick }
              />))}
            </div>
          </div>)}
      </div>
    );
  }
}

album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
