import React, { Component } from 'react';
import Header from '../components/Header';

export default class album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <h1>album</h1>
      </div>
    );
  }
}
