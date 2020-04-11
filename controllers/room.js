
/*********************room ROUTES***************************/
const express = require('express')
const router = express.Router();
const roomModel = require("../models/room.js")


//Route to direct use to Add Room form
router.get("/add", (req, res) => {
    res.render("Room/roomAddForm");
});

//Route to process user's request and data when the user submits the add room form
router.post("/add", (req, res) => {

    const newUser = {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price,
        status: req.body.status,

    }

    const room = new roomModel(newUser);
    room.save()
        .then(() => {
            res.redirect("/room/list")
        })
        .catch(err => console.log(`Error inserting to the database: ${err} `));

});

////Route to fetch all rooms
router.get("/list", (req, res) => {
    roomModel.find()
        .then((rooms) => {

            // returning array will be called for each iteration
            const filteredRoom = rooms.map(room => {
                return {
                    id: room._id,
                    title: room.title,
                    description: room.description,
                    location: room.location,
                    price: room.price,
                    status: room.status
                }
            });


            res.render("Room/roomDashboard", {
                data: filteredRoom
            });
        })
        .catch(err => console.log(`Error pulling from the database: ${err} `));



});

//Route to direct user to the room profile page
router.get("/description", (req, res) => {



})


router.get("/edit/:id", (req, res) => {
    roomModel.findById(req.params.id)
        .then((room) => {

            const { _id, title, description, location, price, status } = room;
            res.render("Room/roomEditForm", {
                _id,
                title,
                description,
                location,
                price,
                status
            })

        })
        .catch(err => console.log(`Error happened when pulling from the database :${err}`));

})




router.put("/update/:id", (req, res) => {
    const room =
    {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        status: req.body.status,
        price: req.body.price
    }
    roomModel.updateOne({ _id: req.params.id }, room)
        .then(() => {
            res.redirect("/room/list");
        })
        .catch(err => console.log(`Error happened when updating data from the database :${err}`));
});


//Route to direct user to delete room 
router.delete("/delete/:id", (req, res) => {

    roomModel.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect("/room/list");
        })
        .catch(err => console.log(`Error happened when updating data from the database :${err}`));

});





module.exports = router;