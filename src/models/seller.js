const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number
    }

})



const Seller = mongoose.model("seller", SellerSchema)
module.exports = Seller;