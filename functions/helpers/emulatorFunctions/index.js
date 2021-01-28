const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { LEVELS, GAMES, PLAYER_SELECTION } = require("../constants/index");

const db = admin.firestore();

const addMockData = functions.https.onRequest(async (req, res) => {
  const levelData = {
    characters: [
      { name: "Waldo", xCoord: 59, yCoord: 11 },
      { name: "Odlaw", xCoord: 31, yCoord: 64 },
      { name: "Wizard", xCoord: 74, yCoord: 86 },
      { name: "Wenda", xCoord: 29, yCoord: 95 },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-top.appspot.com/o/level-5.jpg?alt=media&token=57119118-a0ef-4e32-bee3-af9eaecc9b4a",
    level: 5,
  };

  const gameData = {
    characters: [
      { character: "Waldo", found: false },
      { character: "Odlaw", found: false },
      { character: "Wizard", found: false },
      { character: "Wenda", found: false },
    ],
    level: 5,
    startTime: admin.firestore.FieldValue.serverTimestamp(),
  };

  db.collection(LEVELS).add(levelData);
  db.collection(GAMES).add(gameData);admin.firestore.FieldValue.serverTimestamp()

  return res.send({ finish: "data added succesfully" });
});

const addMockPlayerSelection = functions.https.onRequest(async (req, res) => {
  db.collection(GAMES)
    .where("level", "==", 5)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const gameId = doc.id;
        const playerSelectionData = {
          character: "Wizard",
          coords: {
            xCoord: 72,
            yCoord: 88,
          },
          gameId: gameId,
          level: 5,
        };
        db.collection(PLAYER_SELECTION).add(playerSelectionData);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  
  return res.send({ finish: "data added succesfully" });
});

module.exports = {
  addMockData,
  addMockPlayerSelection,
};
