import React, { Component } from 'react';

import IButtonProps from './IButtonProps';

import './Button.css';

export default class Button extends Component<IButtonProps> {
  render() {
    return(
      <button
        onClick={this.props.onClick}
        className='btn'>
          {this.props.children}
      </button>
    )
  }
}