import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProfileEdit extends Component {
  render() {
    const {
      name,
      email,
      description,
      imageUrl,
      onInputChange,
      onButtonClick,
      isButtonDisable,
    } = this.props;
    return (
      <div className="edit-profile-full">
        <div>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              placeholder="Nome de Usuario"
              name="name"
              id="name"
              className="form-control"
              value={ name }
              onChange={ onInputChange }
              data-testid="edit-input-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              className="form-control"
              value={ email }
              onChange={ onInputChange }
              data-testid="edit-input-email"
            />
          </label>
          <div className="form-group">
            <label htmlFor="description">
              Descrição
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                className="form-control"
                value={ description }
                onChange={ onInputChange }
                data-testid="edit-input-description"
              />
            </label>
          </div>
          <label htmlFor="imageUrl">
            Url da imagem
            <input
              type="text"
              placeholder="Url da imagem"
              name="imageUrl"
              id="imageUrl"
              className="form-control"
              value={ imageUrl }
              onChange={ onInputChange }
              data-testid="edit-input-email"
            />
          </label>
          <div>
            <Link to="/profile">
              <button
                type="button"
                className="btn btn-light"
                onClick={ onButtonClick }
                disabled={ isButtonDisable }
                data-testid="edit-button-save"
              >
                Salvar
              </button>
            </Link>
          </div>
        </div>
        <img
          src={ imageUrl ? imageUrl : 'https://www.amigosdobaleia.org.br/packages/trustir/exclusiva/img/user_placeholder.png' }
          alt={ name }
          data-testid="profile-image"
          // className="profile-image"
          // height="200px"
        />
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isButtonDisable: PropTypes.bool.isRequired,
};
