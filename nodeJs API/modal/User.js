const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    school: String
})

const Users = mongoose.model('users', UserSchema)

module.exports = Users