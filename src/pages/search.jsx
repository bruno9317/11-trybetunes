import React, { Component } from 'react';
import Header from '../components/Header';

export default class search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>search</h1>
      </div>
    );
  }
}
