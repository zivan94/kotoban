import React, { Component } from 'react';

import IPlayerState from './IPlayerState';
import IPlayerProps from './IPlayerProps';
import { Constants } from '../../fixtures/constants';

import './Player.css';

export default class Player extends Component<IPlayerProps, IPlayerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      x: this.props.x,
      y: this.props.y,
    };
  }

  render() {
    return(
      <span
        style= {{
          left: `${this.state.x * Constants.CELL_SIZE}px`,
          top: `${this.state.y * Constants.CELL_SIZE}px`,
        }}
        className='cell'
        role='img'
        aria-label='miay'>
        🐈
      </span>
    )
  }
}
