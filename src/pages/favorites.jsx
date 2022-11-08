import React, { Component } from 'react';
import FavoriteMusicCard from '../components/FavoriteMusicCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class favorites extends Component {
  state = {
    listaDeMusicas: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const listaDeMusicas = await getFavoriteSongs();
    this.setState({ listaDeMusicas });
    this.setState({ isLoading: false });
  }

  async componentDidUpdate() {
    const listaDeMusicas2 = await getFavoriteSongs();
    this.setState({ listaDeMusicas: listaDeMusicas2 });
  }

  onInputClick = async (event) => {
    this.setState({ isLoading: true });
    const { target } = event;
    const { listaDeMusicas } = this.state;
    const song = listaDeMusicas.find((m) => m.trackId === parseInt(target.id, 10));
    await removeSong(song);
    this.setState({ listaDeMusicas });
    this.setState({ isLoading: false });
  };

  render() {
    const { listaDeMusicas, isLoading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { isLoading ? <Loading /> : listaDeMusicas.map((p, index) => (<FavoriteMusicCard
          key={ index }
          musicName={ p.trackName }
          albumImage={ p.artworkUrl100 }
          trackId={ `${p.trackId}` }
          previewUrl={ p.previewUrl }
          onInputClick={ this.onInputClick }
        />)) }
      </div>
    );
  }
}
