const Product = require("../models/product");
const Seller = require("../models/seller");
const mongoose = require("mongoose");

class Transaction {
    async create(req, res) {
        const session = await mongoose.startSession();
        try {

            session.startTransaction();
            const seller = await Seller.create([req.body.seller], { session })

            const product = await Product.create([{ ...req.body.product, seller: seller[0]._id }], { session })

            await session.commitTransaction();
            session.endSession();
            

            return res.status(200).json({ status: true, message: "seller ceated successfully", data: { seller, product } })
        }
        catch (error) {
            await session.abortTransaction();
            session.endSession();
            console.error("Error in creating transacton:", error);
            return res.status(500).json({ status: true, message: error.message })
        }

    }
}

module.exports = new Transaction();
