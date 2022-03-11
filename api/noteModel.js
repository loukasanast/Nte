const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    owner: {
        name: {
            type: String,
            required: true
        },
        age: Number
    }
});

module.exports = mongoose.model('Note', NoteSchema);