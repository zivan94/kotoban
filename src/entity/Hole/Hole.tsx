import React, { Component } from 'react';
import IHoleProps from './IHoleProps';
import { Constants } from '../../fixtures/constants';

export default class Hole extends Component<IHoleProps> {
  render() {
    return(
      <span
        style= {{
          left: `${this.props.x * Constants.CELL_SIZE}px`,
          top: `${this.props.y * Constants.CELL_SIZE}px`,
        }}
        className='cell'
        role='img'
        aria-label='miay'>
        🕳️
      </span>
    )
  }
}