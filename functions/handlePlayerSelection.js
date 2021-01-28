const functions = require('firebase-functions');

const handlePlayerSelection = functions.firestore
    .document('playerSelection/{docId}')
    .onCreate((snap, context) => {
        const { character, coords, gameId, level } = snap.data();
        console.log(character, coords, gameId, level);
        return true;
    })

module.exports = handlePlayerSelection;