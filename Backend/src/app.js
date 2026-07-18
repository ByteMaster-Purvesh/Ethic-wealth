const express = require('express')
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

const app = express()

const cookieParser = require('cookie-parser');
const cors = require('cors');

// Middelwares
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this if your frontend runs on a different port (e.g., 3000)
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())

// Routes
const contactRoutes = require('../Routes/contact.routes');
const authRoutes = require('../Routes/auth.routes');

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

module.exports = app