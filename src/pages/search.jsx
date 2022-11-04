import React, { Component } from 'react';
import Header from '../components/Header';

export default class search extends Component {
  state = {
    pesquisar: '',
    isButtonDisabled: true,
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

  render() {
    const {
      pesquisar,
      isButtonDisabled,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
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
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </div>
    );
  }
}
