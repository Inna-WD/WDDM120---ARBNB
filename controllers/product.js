const express = require('express')
const router = express.Router();
//load product data (listings)
const productModel = require("../models/product")

// listings db
router.get("/products", (req, res) => {
    res.render("products", {
        title: "Our Listings",
        headingInfo: "Our Listings",
        products: productModel.getAllProducts()
    });
});

module.exports = router;