const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// schema for the users - documents
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
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        default: "New"
    },
    profilePic:{
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

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;