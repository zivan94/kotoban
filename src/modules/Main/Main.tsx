import React, { Component } from 'react';
import IMainState from './IMainState';
import MainMenuItem from './MainMenuItem';

import './MainMenu.css';

export default class Main extends Component<{}, IMainState> {
  constructor(pros: any) {
    super(pros);

    const { levelsCount } : IMainState = require('../../fixtures/meta');
    this.state = {
      levelsCount,
    }
  }
  render() {
    const levelArray = [];

    for(let i = 1; i <= this.state.levelsCount; i++) {
      levelArray.push(<MainMenuItem key={i} num={i} />);
    }

    return(
      <div className='content'>
        <span className='caption' role='img' aria-label='level select'>Выбор уровня 🐾🐾🐾</span>
        <div>
          {levelArray}
        </div>
      </div>
    )
  }
}