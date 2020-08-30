import React, { Component, Dispatch } from 'react';

import { Player } from '../entity';
import IMapProps from './IMapProps';
import IMapState from './IMapState';

import EntytyBuilder from '../entity/EntytyBuilder';
import { Hole } from '../entity/Hole';
import { Yarn } from '../entity/Yarn';

import './Map.css';
import { connect } from 'react-redux';
import { GameActions } from '../data/actions/game';
import IPosition from '../interfaces/IPosition';
import { ACTION_TYPES } from '../data/actions/actionTypes';
import { WinLabel } from '../modules/conponents';

class Map extends Component<IMapProps, IMapState> {
  private keyIterator = 0;

  eventListner = (e: any) => {
    if (e.key === 'd') {
      this.props.playerMoove({ x: this.props.player.x + 1, y: this.props.player.y});
    } else if (e.key === 'a') {
      this.props.playerMoove({ x: this.props.player.x - 1, y: this.props.player.y});
    } else if (e.key === 'w') {
      this.props.playerMoove({ x: this.props.player.x, y: this.props.player.y - 1});
    } else if (e.key === 's') {
      this.props.playerMoove({ x: this.props.player.x, y: this.props.player.y + 1});
    }
  };

  constructor(props: IMapProps) {
    super(props);

    this.state = {
      name: '###',
    };
    document.onkeydown = this.eventListner
  }

  render() {
    const entytyBuilder = new EntytyBuilder();
    const data = this.props.map ? this.props.map.map((row, y) => {
      return row.split('').map((char, x) => {
        return entytyBuilder.get(char, x, y, this.getKey());
      });
    }) : [];

    return(
      <div className='map'>
        {data.map(items => items.map(item => item))}
        
        {this.props.holes && this.props.holes.map(item => <Hole x={item.x} y={item.y} key={this.getKey()}/>)}
        {this.props.holes && this.props.balls.map(item => <Yarn x={item.x} isCorrect={item.isCorrect} y={item.y} key={this.getKey()}/>)}

        {this.props.isWin && <WinLabel x={this.props.player.x} y={this.props.player.y - 2}/>}

        <Player x={this.props.player.x} y={this.props.player.y} key={this.getKey()}/>
      </div>
    )
  }

  getKey() {
    return this.keyIterator++;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<GameActions>) => {
  return {
    playerMoove: (position: IPosition) => dispatch({ type: ACTION_TYPES.PLAYER_MOVE, position }),
  }
};

export default connect(
  null,
  mapDispatchToProps,
)(Map);
