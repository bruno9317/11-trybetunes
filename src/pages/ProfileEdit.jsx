import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProfileEditComponent from '../components/ProfileEdit';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    isLoading: false,
    // userData: [],
    name: '',
    email: 'qqqqqqqq',
    description: '',
    imageUrl: 'https://www.amigosdobaleia.org.br/packages/trustir/exclusiva/img/user_placeholder.png',
    isButtonDisable: true,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({
      name: user.name,
      email: user.email,
      description:
      user.description,
      imageUrl: user.image,
      isLoading: false,
    });
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      const { name, email, description, imageUrl } = this.state;
      const newButtonState = email.length > 0
      && email.includes('@')
      && email.includes('.com')
      && name.length > 0
      && description.length > 0
      && imageUrl.length > 0;
      console.log(!newButtonState);
      this.setState({ isButtonDisable: !newButtonState });
    });
  };

  onButtonClick = () => {
    const {
      name,
      email,
      description,
      imageUrl,
    } = this.state;
    // console.log('ola');
    updateUser({ name, email, image: imageUrl, description });
  };

  render() {
    const { isLoading, name, email, description, imageUrl, isButtonDisable } = this.state;
    return (
      <div data-testid="page-profile-edit">
        {isLoading ? <Loading />
          : (
            <>
              <Header />
              <ProfileEditComponent
                name={ name }
                description={ description }
                email={ email }
                imageUrl={ imageUrl }
                onInputChange={ this.onInputChange }
                onButtonClick={ this.onButtonClick }
                isButtonDisable={ isButtonDisable }
              />
            </>)}
      </div>
    );
  }
}
