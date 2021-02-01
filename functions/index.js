const admin = require('firebase-admin');
admin.initializeApp();

const handlePlayerSelection = require('./handlePlayerSelection');
const handleSwearingUsernames = require('./handleSwearingUsernames');
// const { addMockData, addMockPlayerSelection } = require('./helpers/emulatorFunctions/index');

module.exports = {
    /* Production functions */
    handlePlayerSelection,
    handleSwearingUsernames,
    /* Emulator functions used for testing */
    // addMockData,
    // addMockPlayerSelection
}
