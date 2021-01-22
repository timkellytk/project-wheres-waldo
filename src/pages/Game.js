import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import firebase, { firestore } from '../firebase';
import GameWrapper from '../components/GameWrapper/GameWrapper';
import CharacterDropdown from '../components/CharacterDropdown/CharacterDropdown';

const Game = (props) => {
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
    const gameSelection = { coords, character, gameID, level: props.level };
    firestore.collection('playerSelection').add(gameSelection);
    hideDropdown();
  };

  const [gameID, setGameID] = useState(null);
  const [image, setImage] = useState('');
  const [characters, setCharacters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [coords, setCoords] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: '0%', top: '0%' });

  useEffect(() => {
    // Load level
    firestore
      .collection('levels')
      .where('level', '==', props.level)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const { image, characters } = doc.data();
          const charactersObj = characters.map((character) => {
            const obj = { character: character.name, found: false };
            return obj;
          });
          setImage(image);
          setCharacters(charactersObj);
        });
      });

    // Create game
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    firestore
      .collection('games')
      .add({ startTime: timestamp, level: props.level })
      .then((docRef) => {
        setGameID(docRef.id);
      });
  }, [props.level]);

  useEffect(() => {
    // Load game characters
    if (gameID) {
      const gameRef = firestore.collection('games').doc(gameID);
      return gameRef
        .update({
          characters,
        })
        .then(function () {
          console.log('Document successfully updated!');
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
        });
    }
  }, [characters, gameID]);

  return (
    <GameWrapper characters={characters}>
      <div className="relative">
        <OutsideClickHandler onOutsideClick={hideDropdown}>
          <img
            className="w-full h-full"
            src={image}
            alt="Game Level"
            onClick={imageClick}
          />
          <CharacterDropdown
            show={showDropdown}
            characters={characters}
            clickLocation={clickLocation}
            clicked={dropdownClick}
          />
        </OutsideClickHandler>
      </div>
    </GameWrapper>
  );
};

export default Game;
