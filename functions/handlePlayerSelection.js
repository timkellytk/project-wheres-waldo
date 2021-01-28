const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { LEVELS, GAMES, PLAYER_SELECTION } = require("./helpers/constants/index");

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
    const gameSnap = await gameRef.get();
    const gameData = gameSnap.data();
    const updatedGameCharacters = gameData.characters.map((char) => {
      if (char.name === character) {
        return { character, found: true };
      }
      return char;
    });
    const isGameover = updatedGameCharacters.every((char) => char.found);

    if (isGameover) {
      gameRef
        .update({
          ...gameData,
          characters: updatedGameCharacters,
          endTime: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(async () => {
          const newGameSnap = await gameRef.get();
          const newGameData = newGameSnap.data();
          const startTime = newGameData.startTime;
          const endTime = newGameData.endTime;
          const elapsedSeconds =
            (endTime.toMillis() - startTime.toMillis()) / 1000;
          await gameRef
            .update({
              elapsedSeconds,
            })
            .then(() => {
              db.collection(PLAYER_SELECTION).doc(snap.id).delete().then(() => {
                return { characters: updatedGameCharacters, elapsedSeconds };
              })
            });
        });
    } else {
      gameRef.update({ ...gameData, characters: updatedGameCharacters }).then(() => {
        db.collection(PLAYER_SELECTION).doc(snap.id).delete().then(() => {
          return { characters: updatedGameCharacters };
        })
      });
     
    }

    console.log(
      character,
      coords,
      gameId,
      level,
      levelData,
      isCharacterAtCoords,
      updatedGameCharacters,
      'snap.id',
      snap.id,
    );
    return true;
  });

module.exports = handlePlayerSelection;
