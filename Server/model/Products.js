const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema({
    user: {
        id: mongoose.Schema.Types.ObjectId,
    },
    author: String,
    country: String,
    imageLink: String,
    language: String,
    amount: Number,
    link: String,
    title: String,
    year: Number
})

module.exports = mongoose.model("products", productSchema)