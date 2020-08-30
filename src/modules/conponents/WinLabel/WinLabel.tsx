import React, { Component } from 'react';
import { Constants } from '../../../fixtures/constants';
import IWinLabelProps from './IWinLabelProps';

import './WinLabel.css';

export default class WinLabel extends Component<IWinLabelProps> {
  render() {
    return(
      <div
        style= {{
          left: `${this.props.x * Constants.CELL_SIZE - 14}px`,
          top: `${this.props.y * Constants.CELL_SIZE + 12}px`,
        }}
        className='bubble bubble-bottom-left'>
          ПОБЕДА!
      </div>
    )
  }
}