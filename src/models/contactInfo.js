const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25,
    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            };
        },
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
    },
    message: {
        type: String,
        required: true,
        minLength: 3,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;