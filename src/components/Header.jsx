import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    name: '',
    image: 'https://www.amigosdobaleia.org.br/packages/trustir/exclusiva/img/user_placeholder.png',
    description: '',
    email: '',
    menu: false,
    isLoading: false,
  };

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    this.setState({ isLoading: true });
    const response = await getUser();
    this.setState({ isLoading: false });
    this.setState({
      name: response.name,
      description: response.description,
      email: response.email,
    });
    if (response.image.length > 0) {
      this.setState({ image: response.image });
    }
  };

  handleMenuClick = () => {
    const { menu } = this.state;
    this.setState({ menu: !menu });
  };

  render() {
    const {
      name,
      image,
      description,
      email,
      isLoading,
      menu,
    } = this.state;
    return (
      <header data-testid="header-component">
        <div
          data-testid="header-user-name"
        >
          {isLoading ? (
            <div className="dropdown-toggle user-loading">
              <img
                src={ image }
                alt=""
                className="HeaderProfileImg"
                height="35px"
              />
              <Loading />
            </div>)
            : (
              <div className="HeaderProfile">
                <div className="menu-trigger">
                  <button
                    type="button"
                    className="button-menu"
                    onClick={ this.handleMenuClick }
                  >
                    <div className="dropdown-toggle">
                      <img
                        src={ image }
                        alt=""
                        className="HeaderProfileImg"
                        height="35px"
                      />
                      {name}
                    </div>
                  </button>
                </div>
                <div className={ `dropdown-men ${menu ? 'active' : 'inactive'}` }>
                  <ul>
                    <li>{`Nome: ${name} `}</li>
                    <li>{`Email: ${email} `}</li>
                    <li>{`Descrição: ${description} `}</li>
                  </ul>
                </div>
              </div>
            )}
        </div>
        <div className="header-links">
          <div>
            <Link
              to="/search"
              data-testid="link-to-search"
              className="header-link"
            >
              Search
            </Link>
          </div>
          <div>
            <Link
              to="/favorites"
              data-testid="link-to-favorites"
              className="header-link"
            >
              Favorites
            </Link>
          </div>
          <div>
            <Link
              to="/profile"
              data-testid="link-to-profile"
              className="header-link"
            >
              Perfil
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
