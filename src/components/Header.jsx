import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    name: '',
    isLoading: false,
  };

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    this.setState({ isLoading: true });
    const response = await getUser();
    this.setState({ isLoading: false });
    this.setState({ name: response.name });
  };

  render() {
    const { name, isLoading } = this.state;
    return (
      <header data-testid="header-component">
        <div
          data-testid="header-user-name"
        >
          {isLoading ? <Loading />
            : (
              <h1>
                {name}
              </h1>
            )}
        </div>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Search</Link>
      </header>
    );
  }
}
