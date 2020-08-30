import React, { Component } from 'react';
import IFloorState from './IFloorProps';
import { Constants } from '../../fixtures/constants';

export default class Floor extends Component<IFloorState> {
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
         
      </span>
    )
  }
}