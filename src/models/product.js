const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "seller"
    }
})

const Product = mongoose.model("product", ProductSchema)
module.exports = Product;