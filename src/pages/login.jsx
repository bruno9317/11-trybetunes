import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

export default class login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <input type="text" testid="login-name-input" />
      </div>
    );
  }
}
