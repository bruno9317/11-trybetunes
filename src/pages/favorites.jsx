import React, { Component } from 'react';
import Header from '../components/Header';

export default class favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>favorites</h1>
      </div>
    );
  }
}
