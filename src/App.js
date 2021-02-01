import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firestore } from "./firebase";
import './assets/main.css';

function App() {
  const [level, setLevel] = useState(1);
  const [levelData, setLevelData] = useState([]);
  const [username, setUsername] = useState('')
  const handleUpdateUsername = (e) => {
    setUsername(e.target.value);
  }

  useEffect(() => {
    firestore
    .collection("levels")
    .get()
    .then(function (querySnapshot) {
      let levelsObj = {};
      querySnapshot.forEach(function (doc) {
        const levelData = doc.data();
        levelsObj[levelData.level] = levelData
        });
        setLevelData(levelsObj);
    });
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/game">
          <Game level={level} username={username} updateUsername={handleUpdateUsername} levelData={levelData} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard setLevel={setLevel} level={level} levelData={levelData} />
        </Route>
        <Route>
          <Home setLevel={setLevel} levelData={levelData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
