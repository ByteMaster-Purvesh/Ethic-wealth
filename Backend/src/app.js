const express = require('express')
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

const app = express()

// Middelwares
app.use(express.json())

// Routes

app.get("/", (req, res) => {
    res.send("Hello World!")
})


module.exports = app