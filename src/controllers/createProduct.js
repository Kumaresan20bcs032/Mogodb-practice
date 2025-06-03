const Product = require("../models/product");


class CreateProduct {
    async create(req, res) {
        try {

            const product = await Product.create(req.body)

            return res.status(200).json({ status: true, message: "product created successfully", data: product })
        }
        catch (error) {
            console.error("Error in creating product:", error);
            return res.status(500).json({ status: true, message: error.message })
        }
    }
}

module.exports = new CreateProduct();