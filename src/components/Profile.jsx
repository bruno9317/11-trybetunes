import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    const { name, description, email, image } = this.props;
    return (
      <div className="mostra-perfil">
        <img
          src={ image }
          alt={ name }
          data-testid="profile-image"
          className="profile-image"
          // height="200px"
        />
        <h1>{ name }</h1>
        <h4>{ email }</h4>
        <p>{ description }</p>
        <Link to="/profile/edit">
          <button type="button" className="btn btn-light">Editar Perfil</button>
        </Link>

      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
