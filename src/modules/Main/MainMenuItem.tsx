import React, { Component } from "react";
import { Link } from 'react-router-dom';
import IMainMenuItemProps from './IMainMenuItemProps';

export default class MainMenuItem extends Component<IMainMenuItemProps> {
  render() {
    return(
      <Link to={`/level/${this.props.num}`} className='main-menu-item'>
        <span>Уровень {this.props.num}</span>
      </Link>
    )
  }
}