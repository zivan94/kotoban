import React, { CElement } from 'react';

import { Wall } from './Wall'
import { Floor } from './Floor'

const WallFactory = React.createFactory(Wall);
const FloorFactory = React.createFactory(Floor);

interface IEtytyMap {
  [key: string]: (x: number, y: number, key: number) => CElement<any, any>;
}

const EtytyMap: IEtytyMap = {
  '#': (x: number, y: number, key: number) => WallFactory({x, y, key}),
}

export default class EntytyBuilder {
  get(char: string, x: number, y: number, key: number) {
    const cell = EtytyMap[char];
    return cell ? cell(x, y, key) : FloorFactory({ x, y, key });
  }
}