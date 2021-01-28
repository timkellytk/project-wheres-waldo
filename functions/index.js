const admin = require('firebase-admin');
admin.initializeApp();

const handlePlayerSelection = require('./handlePlayerSelection');
const { addMockData, addMockPlayerSelection } = require('./helpers/emulatorFunctions/index');

module.exports = {
    /* Production functions */
    handlePlayerSelection,
/* Emulator functions used for testing */
    addMockData,
    addMockPlayerSelection
}
