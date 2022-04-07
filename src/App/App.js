// Importing from the folder
import { Meme } from '../Meme/Meme';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
// import styles from './styles.module.css';
// Importing Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
      <Switch>
          <Route exact path='/'>
            <Meme />
          </Route>
          <Route path='/generated'>
            <MemeGenerated />
          </Route>
      </Switch>
  );
}
