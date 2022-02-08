const mongoose = require("mongoose")

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, () =>{
        console.log(`Connected to mongo successfully`.yellow.underline.bold)
    })
}

module.exports = connectToMongo