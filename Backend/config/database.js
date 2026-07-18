const { default: mongoose } = require("mongoose")
const { green, blue, red } = require('colors-cli')

const connectToDatabse = async () => {
    try {
        const databaseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(green('\n\t Database is connected successfully -' ), databaseInstance.connection.host)
    } catch (error) {
        console.log(red('\nDatabase is failing to connect - '), error)
        process.exit(1)
    }
}

module.exports = connectToDatabse