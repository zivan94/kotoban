import ILevel from '../interfaces/ILevel';

export default interface ISate extends ILevel {
  isWin: boolean;
  num: number;
  stepNum: number;
}