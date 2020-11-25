import React from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/main.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
