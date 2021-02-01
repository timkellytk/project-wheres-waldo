const functions = require("firebase-functions");
const Filter = require("bad-words");
const customFilter = new Filter({ placeHolder: "🤪" });

const handleSwearingUsernames = functions.firestore
  .document("highscores/{docId}")
    .onCreate(async (snap, context) => {
    const { name } = snap.data();
        const cleanName = customFilter.clean(name);
        console.log(cleanName);

    return snap.ref.update({ name: cleanName });
  });

module.exports = handleSwearingUsernames;
