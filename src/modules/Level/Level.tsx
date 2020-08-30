import React, { Component, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { Map } from '../../Map';
import ILevelProps from './ILevelProps';
import { connect } from 'react-redux';
import { GameActions } from '../../data/actions/game';
import { ACTION_TYPES } from '../../data/actions/actionTypes';
import ILevelState from './ILevelState';
import { Button } from '../conponents';

import './Level.css';
import ISate from '../../interfaces/IState';

class Level extends Component<ILevelProps, ILevelState> {
  constructor(props: ILevelProps) {
    super(props);

    this.props.loadLevel(+this.props.match.params.id);
  }
  render() {
    const levelNum = this.props.match.params.id;

    return(
      <div className="level">
        <Link to='/'><Button>В меню</Button></Link>
        <Button onClick={() => this.props.loadLevel(+levelNum)}>Перезапуск</Button>
        
        <div className='states'>
          <span>Уровень {this.props.num}</span>
          <span>Ход {this.props.stepNum}</span>
        </div>
        
        <Map
          isWin={this.props.isWin}
          balls={this.props.balls}
          holes={this.props.holes}
          map={this.props.map}
          player={this.props.player}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: { state: ISate }) => {
  return {
    isWin: state.state.isWin,
    stepNum: state.state.stepNum,
    num: state.state.num,
    balls: state.state.balls,
    holes: state.state.holes,
    map: state.state.map,
    player: state.state.player,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<GameActions>) => {
  return {
    loadLevel: (level: number) => dispatch({ type: ACTION_TYPES.INIT, level }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Level);