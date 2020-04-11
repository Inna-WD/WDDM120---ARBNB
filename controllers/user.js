/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();
const userModel = require("../models/User");
const path = require("path");
const bcrypt = require("bcryptjs");


router.get("/register", (req, res) => {
    res.render("User/register");
});

router.post("/register", (req, res) => {
    const newUser =
    {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }

    const user = new userModel(newUser);
    user.save()
        .then((user) => {
            req.files.profilePic.name = `pro_pic_${user._id}${path.parse(req.files.profilePic.name).ext}`;
            req.files.profilePic.mv(`public/uploads/${req.files.profilePic.name}`)
                .then(() => {
                    userModel.updateOne({ _id: user._id }, {
                        profilePic: req.files.profilePic.name
                    })
                        .then(() => {
                            res.redirect(`/user/profile/${user._id}`)
                        })
                })
        })
        .catch(err => console.log(`Error while inserting into the data ${err}`));
});



router.get("/profile/:id", (req, res) => {
    userModel.findById(req.params.id)
        .then((user) => {
            const { profilePic } = user;
            res.render("User/userDashboard", {
                profilePic
            });
        
        })
        .catch(err => console.log(`Error ${err}`));

})




module.exports = router;