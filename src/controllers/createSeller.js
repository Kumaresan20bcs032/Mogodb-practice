const Seller = require("../models/seller");


class CreateSeller {
    async create(req, res) {
        try {

            const seller = await Seller.create(req.body)

            return res.status(200).json({ status: true, message: "seller ceated successfully", data: seller })
        }
        catch (error) {
            console.error("Error in creating seller:", error);
            return res.status(500).json({ status: true, message: error.message })
        }
    }
}

module.exports = new CreateSeller();