import IPosition from '../../interfaces/IPosition';
import { ACTION_TYPES } from './actionTypes';
import ILevel from '../../interfaces/ILevel';

export const playerMove = (position: IPosition) => ({
  type: ACTION_TYPES.PLAYER_MOVE,
  position,
});

export interface PlayerMove {
  type: ACTION_TYPES.PLAYER_MOVE;
  position: IPosition;
};

export interface IInit {
  type: ACTION_TYPES.INIT;
  level: number;
}

export type GameActions = PlayerMove | IInit;
