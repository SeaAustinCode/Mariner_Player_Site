const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
    .then(() => console.log(`connected to ${DB} db`))
    .catch(error => console.log(`error connecting to ${DB}`, error))
}