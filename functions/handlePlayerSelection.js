const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { LEVELS } = require("./helpers/constants/index");

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

    console.log(
      character,
      coords,
      gameId,
      level,
      levelData,
      isCharacterAtCoords
    );
    return true;
  });

module.exports = handlePlayerSelection;
