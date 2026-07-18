const app = require('./src/app');
const env = require('dotenv')
const { green, blue } = require('colors-cli')

const connectToDatabse = require("./config/database")
env.config()
const PORT = process.env.PORT || 8000;

connectToDatabse()

app.listen(PORT, () => {
    console.log(green('\n\t Server is running successfully!'), '\n\t It runniing on PORT -', blue(`http://localhost:${PORT}`));
})