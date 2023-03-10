import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import logo from '../';

export default class login extends Component {
  state = {
    name: '',
    isButtonDisabled: true,
    isLogged: false,
    isLoading: false,
  };

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      const { name } = this.state;
      const letrasMin = 3;
      const newButtonState = name.length < letrasMin;
      this.setState({ isButtonDisabled: newButtonState });
    });
  };

  handleLoginClick = async () => {
    const { name } = this.state;
    this.setState({ isLoading: true });
    await createUser({ name });
    this.setState({ isLoading: false });
    this.setState({ isLogged: true });
  };

  render() {
    const {
      name,
      isButtonDisabled,
      isLogged,
      isLoading,
    } = this.state;

    return (
      <div data-testid="page-login">
        {
          isLoading
            ? <Loading />
            : (
              <form className="login-form">
                <div className="login-content">
                  <img
                    src="https://files.fm/thumb_show.php?i=zuak2nj85"
                    alt="logo"
                    height="35%"
                  />
                  <div>
                    {isLogged ? <Redirect to="/search" /> : <input
                      type="text"
                      placeholder="Nome de Usuario"
                      name="name"
                      className="form-control"
                      value={ name }
                      onChange={ this.handleChange }
                      data-testid="login-name-input"
                    />}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={ isButtonDisabled }
                      onClick={ this.handleLoginClick }
                      data-testid="login-submit-button"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </form>
            )
        }
      </div>
    );
  }
}

// login.propTypes = {
//   isButtonDisabled: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleLoginClick: PropTypes.func.isRequired,
// };
