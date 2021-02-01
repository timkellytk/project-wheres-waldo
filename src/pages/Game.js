import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import firebase, { firestore } from "../firebase";
import GameWrapper from "../components/GameWrapper/GameWrapper";
import CharacterDropdown from "../components/CharacterDropdown/CharacterDropdown";
import Modal from "../components/Modal";
import isCoordWithinTwoDegrees from "../helpers/isCoordWithinTwoDegrees/index";

const Game = ({ level = 1, levelData = {}, username, updateUsername }) => {
  const [gameId, setgameId] = useState(null);
  const [image, setImage] = useState("");
  const [characters, setCharacters] = useState([]);
  const [gameover, setGameover] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [coords, setCoords] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });

  useEffect(() => {
    // Load level on client
    const getLevelData = levelData[level];
    const transformedCharacters = getLevelData?.characters.map((character) => {
      const obj = { ...character, found: false };
      return obj;
    });
    setImage(getLevelData?.image);
    setCharacters(transformedCharacters);

    // Create game on server
    firestore
      .collection("levels")
      .where("level", "==", level)
      .get()
      .then(function (querySnapshot) {
        let loadedCharacters;
        querySnapshot.forEach(function (doc) {
          const { characters } = doc.data();
          loadedCharacters = characters.map((character) => {
            const obj = { character: character.name, found: false };
            return obj;
          });
        });
        return loadedCharacters;
      })
      .then((loadedCharacters) => {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        firestore
          .collection("games")
          .add({
            startTime: timestamp,
            level,
            characters: loadedCharacters,
          })
          .then((docRef) => {
            setgameId(docRef.id);
            firestore
              .collection("games")
              .doc(docRef.id)
              .onSnapshot((doc) => {
                const data = doc.data();
                setElapsedSeconds(data?.elapsedSeconds);
              });
          });
      });
  }, [level, levelData]);

  useEffect(() => {
    setGameover(characters?.every((char) => char.found));
  }, [characters]);

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
    const updatedCoords = { left: xCoord + "%", top: yCoord + "%" };
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
    const gameSelection = { coords, character, gameId, level };

    // Check for character on client
    const selectedCharacter = characters.find((char) => {
      return char.name === character;
    });
    const { xCoord, yCoord } = selectedCharacter;
    const isCharacterAtCoords =
      isCoordWithinTwoDegrees(xCoord, coords.xCoord) &&
      isCoordWithinTwoDegrees(yCoord, coords.yCoord);
    if (isCharacterAtCoords) {
      const updatedCharacters = characters.map((char) =>
        char.name === character ? { ...char, found: true } : char
      );
      setCharacters(updatedCharacters);
    }

    // Check for character on server
    firestore.collection("playerSelection").add(gameSelection);
    hideDropdown();
  };

  const submitScore = async () => {
    const highscoreRef = await firestore.collection("games").doc(gameId).get();
    const highscoreData = highscoreRef.data();
    const newHighscore = {
      gameId,
      level: highscoreData.level,
      time: highscoreData.elapsedSeconds,
      name: username,
    };
    firestore.collection("highscores").add(newHighscore);
  };

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
      <Modal
        showModal={gameover}
        seconds={elapsedSeconds}
        username={username}
        updateUsername={updateUsername}
        submitScore={submitScore}
      />
    </GameWrapper>
  );
};

export default Game;
