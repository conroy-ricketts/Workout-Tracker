//import mongodb functions
const mongoose = require('mongoose')

//call a new schema or format to put into the database
const Schema = mongoose.Schema
//define schema
const userSchema = new Schema({
    //entry 1: username
    username: {
        type: String,
        required: true,
        unique: true,   
        trim: true,     //no whitespace
        minlength: 3
    },

    //entry 2: password
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    fName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    lName: {
        type: String,
        required: true, 
        trim: true,
        minlength: 3
    },
}, {
    //including timestamps also adds time crated and time updated
    timestamps: true,
});

//create user using the schema
const User = mongoose.model('workout_users', userSchema);
//export the user model 
module.exports = User;