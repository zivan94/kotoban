import ILevel from '../interfaces/ILevel';
import IPosition from '../interfaces/IPosition';

export default interface IMapProps extends ILevel {
  isWin: boolean;
  playerMoove(pos: IPosition): void;
}