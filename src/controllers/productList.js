const Seller = require("../models/seller");
const Product = require("../models/product");

class ProductList {
    async list(req, res) {
        try {

            // const product = await Product.aggregate([
            //     {
            //         $lookup: {
            //             from: "sellers",
            //             localField: "seller",
            //             foreignField: "_id",
            //             as: "seller"
            //         }
            //     }
            // ])

            const seller = await Seller.aggregate([
                {
                    $lookup: {
                        from:"products",
                        localField:"_id",
                        foreignField:"seller",
                        as:"product"
                    }
                }
            ])


            return res.status(200).json({ status: true, message: "product listed successfully", data: seller })
        }
        catch (error) {
            console.error("Error in listing product:", error);
            return res.status(500).json({ status: true, message: error.message })
        }
    }
}

module.exports = new ProductList();