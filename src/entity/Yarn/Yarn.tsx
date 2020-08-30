import React, { Component } from 'react';
import IYarnProps from './IYarnProps';
import { Constants } from '../../fixtures/constants';

export default class Yarn extends Component<IYarnProps> {
  render() {
    const img = this.props.isCorrect ? '🏆' : '🧶';
    return(
      <span
        style= {{
          left: `${this.props.x * Constants.CELL_SIZE}px`,
          top: `${this.props.y * Constants.CELL_SIZE}px`,
        }}
        className='cell'
        role='img'
        aria-label='miay'>
        {img}
      </span>
    )
  }
}