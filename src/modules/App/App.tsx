import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';


import './App.css';
import IAppProps from './IAppProps';
import { Main } from '../Main';
import { Header } from '../conponents';
import Level from '../Level/Level';

export default class App extends Component<IAppProps> {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            path='/level/:id'
            component={Level}
          >
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
    );
  }
}
