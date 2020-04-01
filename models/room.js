const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// schema for the rooms listings - documents
const roomSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: number,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    type: {
        type: String,
        default: "Regular"
    },
    photo: {
        type: String,
        require: false
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    createdBy: {

    }
});

const roomModel = mongoose.model('Room', roomSchema);
module.exports = roomModel;