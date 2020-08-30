import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
  render() {
    return(
      <header>
        <span className='label' role="img" aria-label="hedaer logo">🐱 КОТОБАН</span>
      </header>
    )
  }
}