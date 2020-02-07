const express = require("express");
const exphbs = require('express-handlebars');
const app = express();

//This allows express to make my static content available from the public
app.use(express.static('public'));

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


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
        title: 'Island house', description: `Our rearest listing. Green house in the middle of the lake Hgtamik`, price: `256`, image: '/img/1.jpg',beds: '2'
    });

    fakeDB.push({
        title: 'Student unit by designer', description: `Perfect unit for the student who wishes studing get away`, price: `178`, image: '/img/2.jpg',beds: '4'
    });

    fakeDB.push({
        title: 'Family cabin', description: `Family cabin for a big-medium-small size family. Bring them all`, price: `165`, image: '/img/3.jpg',beds: '6'
    });

    fakeDB.push({
        title: 'Hobbit house 1', description: `Lord of the rings? fan This is a vacation place just for you`, price: `165`, image: '/img/4.jpg',beds: '6'
    });

    fakeDB.push({
        title: 'High and awesome', description: `Stylish designer house just in the heart of the city`, price: `298`, image: '/img/5.jpg',beds: '6'
    });

    fakeDB.push({
        title: 'On the cliff', description: `Get way in the middle of the nowhere. Exclusive opportunity to relax`, price: `312`, image: '/img/6.jpg',beds: '3'
    });

    fakeDB.push({
        title: 'Stylish container', description: `Great opportunity to explore the nature, relax and meditate`, price: `158`, image: '/img/7.jpg',beds: '2'
    });

    fakeDB.push({
        title: 'Bus or RV?', description: `Cosy and stylish, simple but well equipped, this bus is what you need for the weekend`, price: `121`, image: '/img/8.jpg',beds: '2'
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
