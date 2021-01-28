const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { LEVELS, GAMES } = require("./helpers/constants/index");

const db = admin.firestore();

const handlePlayerSelection = functions.firestore
  .document("playerSelection/{docId}")
  .onCreate(async (snap, context) => {
    const { character, coords, gameId, level } = snap.data();

    const levelSnap = await db
      .collection(LEVELS)
      .where("level", "==", level)
      .get();
    const levelData = levelSnap.docs
      .map((doc) => {
        return doc.data();
      })
      .reduce((doc) => doc);
    const isCharacterAtCoords = levelData.characters.some(
      (char) =>
        char.name === character &&
        char.xCoord === coords.xCoord &&
        char.yCoord === coords.yCoord
    );

    const gameRef = db.collection(GAMES).doc(gameId);
    const gameSnap = await gameRef.get()
    const gameData = gameSnap.data();
    const updatedGameCharacters = gameData.characters.map((char) => {
      if (char.name === character) {
        return { character, found: true };
      }
      return char;
    });
    const updatedGame = {...gameData, characters: updatedGameCharacters}
    await gameRef.update(updatedGame);

    console.log(
      character,
      coords,
      gameId,
      level,
      levelData,
      isCharacterAtCoords,
      updatedGameCharacters,
      updatedGame
    );
    return true;
  });

module.exports = handlePlayerSelection;
