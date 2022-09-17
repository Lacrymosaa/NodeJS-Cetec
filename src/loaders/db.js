const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://marianvulpix:<password>@vulpesserver.hykaak6.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = startDB;