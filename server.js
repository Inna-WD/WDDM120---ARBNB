const express = require("express");
const exphbs = require('express-handlebars');
const app = express();

//This allows express to make my static content available from the public
app.use(express.static('public'));

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set up routes
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
        headingInfo: "Home Page",
        randomContent: "BLAH BLAH BLHA"
    });
});

app.get("/contact-us", (req, res) => {
    res.render("contactus", {
        title: "Contact Us",
        headingInfo: "Contact Us Page",
    });
});

app.get("/products", (req, res) => {
    const fakeDB = [];
// listings

    fakeDB.push({
        title: 'Island house', description: `Our rearest listing. Green house in the middle of the lake Hgtamik`, price: `256`, image: '/img/1.jpg'
    });

    fakeDB.push({
        title: 'Student unit by designer', description: `Perfect unit for the student who wishes studing get away`, price: `178`, image: '/img/2.jpg'
    });

    fakeDB.push({
        title: 'Family cabin', description: `Family cabin for a big-medium-small size family. Bring them all`, price: `165`, image: '/img/3.jpg'
    });

    fakeDB.push({
        title: 'Hobbit house 1', description: `Like "Lord of the rings?" This is a place for you`, price: `211`, image: '/img/4.jpg'
    });

    fakeDB.push({
        title: 'Hign and awesome', description: `Disgn house just in the heart of the city`, price: `298`, image: '/img/5.jpg'
    });

    res.render("products", {
        title: "Products",
        headingInfo: "Products Page",
        products: fakeDB

    });
});

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Web server is up and running`)
})
