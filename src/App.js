import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import album from './pages/album';
import favorites from './pages/favorites';
import login from './pages/login';
import NotFound from './pages/NotFound';
import profile from './pages/profile';
import ProfileEdit from './pages/ProfileEdit';
import search from './pages/search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ login } />
        <Route exact path="/search" component={ search } />
        <Route exact path="/album/:id" component={ album } />
        <Route exact path="/favorites" component={ favorites } />
        <Route exact path="/profile" component={ profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="*" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
