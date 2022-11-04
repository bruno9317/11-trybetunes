import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class login extends Component {
  render() {
    const { isButtonDisabled, name, handleChange, handleLoginClick } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            type="text"
            placeholder="Nome de Usuario"
            name="name"
            value={ name }
            onChange={ handleChange }
            data-testid="login-name-input"
          />
          <button
            type="button"
            disabled={ isButtonDisabled }
            onClick={ handleLoginClick }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

login.propTypes = {
  isButtonDisabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
};
