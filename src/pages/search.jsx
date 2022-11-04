import React, { Component } from 'react';
import Album from '../components/Album';
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
        <Header />
        {isLoading ? <Loading />
          : (
            <div>
              <input
                type="text"
                placeholder="pesquisar"
                name="pesquisar"
                value={ pesquisar }
                onChange={ this.handleChange }
                data-testid="search-artist-input"
              />
              <button
                type="button"
                disabled={ isButtonDisabled }
                onClick={ this.handleSearchClick }
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>
            </div>)}
        <h3>
          {
            `${fraseResultado}`
          }
        </h3>
        {
          albums.length
          > 0
            ? (
              <h1>
                { albums.map((p, index) => (<Album
                  key={ index }
                  albumImage={ p.artworkUrl100 }
                  albumName={ p.collectionName }
                  artistName={ p.artistName }
                  collectionId={ p.collectionId }
                />)) }
              </h1>
            ) : (
              <h1>
                Nenhum álbum foi encontrado
              </h1>
            )
        }
      </div>
    );
  }
}
