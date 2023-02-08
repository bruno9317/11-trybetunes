import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Profile from '../components/Profile';
import { getUser } from '../services/userAPI';

export default class profile extends Component {
  state = {
    isLoading: false,
    userData: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const user = await getUser();
    // console.log(user);
    this.setState({ userData: user, isLoading: false });
  }

  render() {
    const { isLoading, userData } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <div className="form-group">
          { isLoading ? <Loading /> : <Profile
            name={ userData.name }
            email={ userData.email }
            image={ userData.image ? userData.image : 'https://www.amigosdobaleia.org.br/packages/trustir/exclusiva/img/user_placeholder.png' }
            description={ userData.description }
          />}
        </div>
      </div>
    );
  }
}
