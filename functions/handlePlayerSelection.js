const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {
  LEVELS,
  GAMES,
  PLAYER_SELECTION,
} = require("./helpers/constants/index");

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
    const isCoordWithinTwoDegrees = (coord1, coord2) => {
      return (
        coord1 === coord2 ||
        coord1 + 1 === coord2 ||
        coord1 + 2 === coord2 ||
        coord1 - 1 === coord2 ||
        coord1 - 2 === coord2
      );
    };
    const isCharacterAtCoords = levelData.characters.some(
      (char) =>
        char.name === character &&
        isCoordWithinTwoDegrees(char.xCoord, coords.xCoord) &&
        isCoordWithinTwoDegrees(char.yCoord, coords.yCoord)
    );

    if (isCharacterAtCoords) {
      const gameRef = db.collection(GAMES).doc(gameId);
      const gameSnap = await gameRef.get();
      const gameData = gameSnap.data();
      const updatedGameCharacters = gameData.characters.map((char) => {
        if (char.character === character) {
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
                db.collection(PLAYER_SELECTION)
                  .doc(snap.id)
                  .delete()
                  .then(() => {
                    console.log("Succesfully updated game - gameover");
                    return {
                      characters: updatedGameCharacters,
                      elapsedSeconds,
                    };
                  });
              });
          });
      } else {
        gameRef
          .update({ ...gameData, characters: updatedGameCharacters })
          .then(() => {
            db.collection(PLAYER_SELECTION)
              .doc(snap.id)
              .delete()
              .then(() => {
                console.log("Succesfully updated game - players remaining");
                return { characters: updatedGameCharacters };
              });
          });
      }
    }
    return false;
  });

module.exports = handlePlayerSelection;
