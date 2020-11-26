import React from 'react';
import GameWrapper from '../components/GameWrapper/GameWrapper';
import Level1 from '../img/levels/level-1.jpg';

const Game = () => {
  const getLocationImageClick = (e) => {
    const xCoord = e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth;
    const yCoord = e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight;
    const coords = { xCoord, yCoord };
    return coords;
  };

  return (
    <GameWrapper>
      <img
        className="w-full h-full"
        src={Level1}
        alt="level 1"
        onClick={(e) => console.log(getLocationImageClick(e))}
      />
    </GameWrapper>
  );
};

export default Game;
