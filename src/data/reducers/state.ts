import { GameActions } from '../actions/game';
import { ACTION_TYPES } from '../actions/actionTypes';
import IPosition from '../../interfaces/IPosition';
import IYarnProps from '../../entity/Yarn/IYarnProps';
import ISate from '../../interfaces/IState';
import IHoleProps from '../../entity/Hole/IHoleProps';

const defaultState: ISate = {
  isWin: false,
  num: 0,
  stepNum: 1,
  balls: [],
  holes: [],
  map: [],
  player: { x: -100, y: -100 },
}

const checkPositionInArray = <T>(pos: IPosition, ar: any[]): T => {
  return ar.find(ball => ball.x === pos.x && ball.y === pos.y);
};

export default (state: ISate = defaultState, action: GameActions) => {
  switch(action.type) {
    case ACTION_TYPES.INIT: {
      const newState: ISate = {
        ...defaultState,
        ...require(`../../fixtures/levels/main/${action.level}.json`),
      }

      const balls: IYarnProps[] = [];
      const holes: IHoleProps[] = [];
      newState.map.forEach((row, y) => {
        row.split('').forEach((char, x) => {
          if (char === 'O') {
            balls.push({
              isCorrect: false,
              x: x,
              y: y,
            });
          newState.balls = balls;
          } else if (char === 'U') {
            holes.push({
              x: x,
              y: y,
            });
            newState.holes = holes;
          } else if (char === 'P') {
            newState.player = {
              x: x,
              y: y,
            };
          }
        })
      })

      return {
        ...newState,
        player: newState.player,
      };
    }
    case ACTION_TYPES.PLAYER_MOVE: {
      let newPos = action.position;
      if (state.map[newPos.y][newPos.x] === '#') {
        newPos = { ...state.player };
      } else {
        state.stepNum += 1;
      }
      
      const ballCollision: IYarnProps = checkPositionInArray(newPos, state.balls);
      if (ballCollision) {
        const ballCollisionIndex = state.balls.findIndex(ball => ball.x === newPos.x && ball.y === newPos.y);
      
        const ballPosDelta = {
          x: ballCollision.x - state.player.x,
          y: ballCollision.y - state.player.y,
        }

        let ballNewPos: IYarnProps = {
          isCorrect: ballCollision.isCorrect,
          x: ballCollision.x + ballPosDelta.x,
          y: ballCollision.y + ballPosDelta.y,
        }

        // Проверяем столкновение либо с шариками в лузе, либо со стеной, либо елси шар упирается в стену
        if (ballNewPos.isCorrect || checkPositionInArray(ballNewPos, state.balls) || state.map[ballNewPos.y][ballNewPos.x] === '#') {
          ballNewPos = { ...ballCollision };
          newPos = { ...state.player };
          state.stepNum -= 1;
        }

        if (checkPositionInArray(ballNewPos, state.holes)) {
          ballNewPos.isCorrect = true;
        }

        state.balls = [
          ...state.balls.slice(0, ballCollisionIndex),
          ballNewPos,
          ...state.balls.slice(ballCollisionIndex + 1)
        ];

        const isWin = state.balls.every(ball => ball.isCorrect);
        if (isWin) {
          state.isWin = true;
          setTimeout(() => window.location.href = '/', 300);
        }
      }
      return {
        ...state,
        player: newPos,
      }
    }
    default:
      return state;
  }
}