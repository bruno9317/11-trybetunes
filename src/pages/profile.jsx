import React, { Component } from 'react';
import Header from '../components/Header';

export default class profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <h1>profile</h1>
      </div>
    );
  }
}
