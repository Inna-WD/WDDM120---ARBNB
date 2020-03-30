const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// schema for the rooms listings - documents
const userSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    phone: {
        type: number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    type: {
        type: String,
        default: "New"
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    createdBy: {

    }
});

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;