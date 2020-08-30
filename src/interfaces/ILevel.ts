import IPosition from './IPosition';
import IYarnProps from '../entity/Yarn/IYarnProps';

export default interface ILevel {
  map: string[];
  player: IPosition;
  balls: IYarnProps[];
  holes: IPosition[];
};