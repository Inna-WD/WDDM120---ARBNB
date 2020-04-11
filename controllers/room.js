
/*********************room ROUTES***************************/
const express = require('express')
const router = express.Router();
const roomModel = require("../models/room.js")


//Route to direct use to Add Task form
router.get("/add", (req, res) => {
    res.render("Room/roomAddForm");
});

//Route to process user's request and data when the user submits the add room form
router.post("/add", (req, res) => {

    const newUser = {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority
    }

    const room = new roomModel(newUser);
    room.save()
        .then(()=>{
           res.redirect("/room/list") 
        })
        .catch(err => console.log(`Error inserting to the database: ${err} `));

});

////Route to fetch all tasks
router.get("/list", (req, res) => {
    res.render("Room/roomDashboard");

});

//Route to direct user to the task profile page
router.get("/description", (req, res) => {



})


//Route to direct user to edit task form



//Route to update user data after they submit the form


//router to delete user


module.exports = router;