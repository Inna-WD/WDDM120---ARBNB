const express = require('express')
const router = express.Router();
//load product data (featured listings)
const featuredModel = require("../models/featured")

 //featured listings db
 router.get("/featured", (req, res) => {
    res.render("featured",{
        title: "Our Featured Listings",
        headingInfo: "Our Family Featured Listings",
        featured: featuredModel.getAllFeatured()
    });
});

module.exports=router;