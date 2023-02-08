import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class search extends Component {
  state = {
    pesquisar: '',
    isButtonDisabled: true,
    isLoading: false,
    fraseResultado: '',
    albums: [],
  };

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      const { pesquisar } = this.state;
      const letrasMin = 2;
      const newButtonState = pesquisar.length < letrasMin;
      this.setState({ isButtonDisabled: newButtonState });
    });
  };

  handleSearchClick = async () => {
    const { pesquisar } = this.state;
    this.setState({ isLoading: true });
    const receba = await searchAlbumsAPI(pesquisar);
    this.setState({
      isLoading: false,
      fraseResultado: `Resultado de álbuns de: ${pesquisar}`,
      albums: receba,
      pesquisar: '',
    });
  };

  render() {
    const {
      pesquisar,
      isButtonDisabled,
      albums,
      isLoading,
      fraseResultado,
    } = this.state;
    return (
      <div data-testid="page-search">
        {isLoading ? <Loading />
          : (
            <div>
              <Header />
              <div className="main-div">
                <div className="input-div">
                  <input
                    type="text"
                    placeholder="pesquisar"
                    name="pesquisar"
                    className="form-control"
                    value={ pesquisar }
                    onChange={ this.handleChange }
                    data-testid="search-artist-input"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-light"
                    disabled={ isButtonDisabled }
                    onClick={ this.handleSearchClick }
                    data-testid="search-artist-button"
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
            </div>)}
        <h5 className="albums-found">
          {
            `${fraseResultado}`
          }
        </h5>
        {
          albums.length
          > 0
            ? (
              <div className="AlbumGroup">
                { albums.map((p, index) => (<AlbumCard
                  key={ index }
                  albumImage={ p.artworkUrl100 }
                  albumName={ p.collectionName }
                  artistName={ p.artistName }
                  collectionId={ p.collectionId }
                />)) }
              </div>
            ) : (
              <h5 className="not-found">
                Nenhum álbum foi encontrado
              </h5>
            )
        }
      </div>
    );
  }
}
