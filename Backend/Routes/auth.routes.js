const express = require('express')
const route = express.Router()
const userModule = require("../Modules/user.module.js")

route.post('/register', async (req, res) => {
    const {username, email, password} = req.body

    //validation
    if(!username || !email || !password){
        return res.status(400).json({ massage: "All fields are required" })
    }

    const isUseralreadyexist = await userModule.find({
        $or: [
            { username },
            { email }
        ]
    })

    if(isUseralreadyexist){
        res.status(400).json({
            massage: `User already register! ${email == email? "Email" : "Username"}`
        })
    } 

    res.status(201).json({
        massage: 'User got register successfully!',
        user
    })
})


module.exports = route