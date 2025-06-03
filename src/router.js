const express = require("express");
const router = express.Router();

const createProduct = require("./controllers/createProduct");
const createSeller = require("./controllers/createSeller");
const productList = require("./controllers/productList");
const transaction = require("./controllers/transaction");

router.post("/product", createProduct.create);
router.post("/seller", createSeller.create);
router.get("/product/list", productList.list);
router.post("/transaction", transaction.create)



module.exports = router;