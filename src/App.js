import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import Profile from './pages/profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/search';
import { createUser } from './services/userAPI';

class App extends React.Component {
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
      <Switch>
        {isLoading ? <Loading /> : <Route
          exact
          path="/"
          render={ () => (isLogged ? <Redirect to="/search" /> : <Login
            isButtonDisabled={ isButtonDisabled }
            name={ name }
            handleChange={ this.handleChange }
            handleLoginClick={ this.handleLoginClick }
          />) }
        /> }
        {/* <Route
          exact
          path="/"
          render={ () => (isLogged ? <Redirect to="/search" /> : <Login
            isButtonDisabled={ isButtonDisabled }
            name={ name }
            handleChange={ this.handleChange }
            handleLoginClick={ this.handleLoginClick }
          />) }
        /> */}
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
