import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import GameWrapper from '../components/GameWrapper/GameWrapper';
import CharacterDropdown from '../components/CharacterDropdown/CharacterDropdown';
import Level1 from '../img/levels/level-1.jpg';

const Game = () => {
  const getLocationImageClick = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord };
    return coords;
  };

  const updateClickLocation = (coords) => {
    const { xCoord, yCoord } = coords;
    const updatedCoords = { left: xCoord + '%', top: yCoord + '%' };
    setClickLocation(updatedCoords);
    setShowDropdown(true);
  };

  const imageClick = (e) => {
    const coords = getLocationImageClick(e);
    setCoords(coords);
    updateClickLocation(coords);
  };

  const hideDropdown = () => setShowDropdown(false);

  const dropdownClick = (character) => {
    const gameSelection = { coords, character };
    console.log(gameSelection);
    hideDropdown();
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [coords, setCoords] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: '0%', top: '0%' });

  return (
    <GameWrapper>
      <div className="relative">
        <OutsideClickHandler onOutsideClick={hideDropdown}>
          <img
            className="w-full h-full"
            src={Level1}
            alt="level 1"
            onClick={imageClick}
          />
          <CharacterDropdown
            show={showDropdown}
            clickLocation={clickLocation}
            clicked={dropdownClick}
          />
        </OutsideClickHandler>
      </div>
    </GameWrapper>
  );
};

export default Game;
