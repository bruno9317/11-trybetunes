import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import Profile from './pages/profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/search';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
