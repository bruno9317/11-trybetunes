import React, { Component } from 'react';
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
        {/* <h1>header</h1> */}
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
      </header>
    );
  }
}
