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

// CONTACT US page
router.get("/contact-us", (req, res) => {
    res.render("contactus");
});
router.post("/contact-us", (req, res) => {

    const { firstName, lastName, phone, email, message } = req.body;
    // console.log(req.body);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.send_grip_api_key);
    const msg = {
        to: `inna.druker@gmail.com`,
        from: `${email}`,
        subject: 'Contact Us Form Submit',
        html: `Visitor's Full Name ${firstName} ${lastName}<br>
            Visitor's email address ${email}<br>
            Mobile ${phone}<br>
            Message: ${message}`
        ,
    };
    sgMail.send(msg)
        .then(() => {
            res.redirect("/");
        })
        .catch(err => { 
            console.log(`Error ${err}`);
        })
});

//


module.exports = router;