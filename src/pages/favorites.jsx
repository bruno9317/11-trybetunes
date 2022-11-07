import React, { Component } from 'react';
import FavoriteMusicCard from '../components/FavoriteMusicCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

export default class favorites extends Component {
  state = {
    listaDeMusicas: [],
    idDasMusicas: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const listaDeMusicas = await getFavoriteSongs();
    this.setState({ listaDeMusicas });
    const idDasMusicas = listaDeMusicas.map((p) => p.trackId);
    this.setState({ idDasMusicas });
    this.setState({ isLoading: false });
  }

  // async componentDidUpdate() {
  //   const listaDeMusicas2 = await getFavoriteSongs();
  //   this.setState({ listaDeMusicas: listaDeMusicas2 });
  //   const idDasMusicas = listaDeMusicas2.map((p) => p.trackId);
  //   this.setState({ idDasMusicas });
  // }

  onInputClick = async (event) => {
    const { target } = event;
    this.setState({ isLoading: true });
    const response = await getMusics(target.id);
    console.log(response);
    console.log(response[0]);
    if (response.length > 0) {
      if (target.checked === true) {
        addSong(response[0]);
      } else {
        removeSong(response[0]);
      }
    }
    const listaDeMusicas2 = await getFavoriteSongs();
    this.setState({ listaDeMusicas: listaDeMusicas2 });
    const idDasMusicas = listaDeMusicas2.map((p) => p.trackId);
    this.setState({ idDasMusicas });
    this.setState({ isLoading: false });
  };

  render() {
    const { listaDeMusicas, idDasMusicas, isLoading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { isLoading ? <Loading /> : listaDeMusicas.map((p, index) => (<FavoriteMusicCard
          key={ index }
          musicName={ p.trackName }
          trackId={ `${p.trackId}` }
          previewUrl={ p.previewUrl }
          isChecked={ idDasMusicas.includes(p.trackId) }
          onInputClick={ this.onInputClick }
        />)) }
      </div>
    );
  }
}
