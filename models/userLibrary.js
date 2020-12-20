const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const librarySchema = new mongoose.Schema({
    userID: {
        type: ObjectId,
        ref: 'User'
    },
    bookID: {
        type: String
    },
    bookMood: {
        type: Boolean
    },
    title: {
        type: String
    },
    thumbnail: {
        type: String
    },
    provincia: {
        type: String
    }
});

module.exports = Library = mongoose.model("library", librarySchema);