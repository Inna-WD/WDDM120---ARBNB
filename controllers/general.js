const express = require('express')
const router = express.Router();


// HOME PAGE 
router.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
        headingInfo: "Home Page",

    });
});

// SIGN IN PAGE 
router.get("/sign-in", (req, res) => {
    res.render("signin", {
        title: "Sign In",
        headingInfo: "Sign In Page",
    });
});
router.post("/sign-in", (req, res) => {
    // res.render();
});

// CONTACT US
router.get("/contact-us", (req, res) => {
    res.render("contactus");
});
router.post("/contact-us", (req, res) => {
    // res.render();
});


module.exports=router;