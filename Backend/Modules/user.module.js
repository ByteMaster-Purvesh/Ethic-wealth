const mongoose = require("mongoose")

const User = new mongoose.Schema({
    username: {
        require: true,
        type: "String",
    },
    email: {
        require: true,
        type: "String",
        unique: true
    },
    password: {
        type: "String",
        require: true,
        unique: true
    }
})

const userModule = mongoose.model("user", User) 

module.exports = userModule