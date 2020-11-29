import React, { useState } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/main.css';

function App() {
  const [level, setLevel] = useState(1);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/game">
          <Game level={level} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard setLevel={setLevel} level={level} />
        </Route>
        <Route>
          <Home setLevel={setLevel} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
