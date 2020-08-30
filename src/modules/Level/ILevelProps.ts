import ILevel from '../../interfaces/ILevel';
import IRoute from '../../interfaces/IRouter';
import ISate from '../../interfaces/IState';

export default interface ILevelProps extends ISate, IRoute {
  loadLevel(level: number): void;
}