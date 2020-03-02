const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser=require('body-parser');
const app = express();

//This allows express to make my static content available from the public
app.use(express.static('public'));

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//parse application
app.use(bodyParser.urlencoded({extended:false}))


// HOME PAGE 
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
        headingInfo: "Home Page",

    });
});

// SIGN IN PAGE 
app.get("/sign-in", (req, res) => {
    res.render("signin", {
        title: "Sign In",
        headingInfo: "Sign In Page",
    });
});
app.post("/sign-in", (req, res) => {
    res.render();
});

// CONTACT US
app.get("/contact-us", (req, res) => {
    res.render();
});
app.post("/contact-us", (req, res) => {
    res.render();
});





 // listings db
app.get("/products", (req, res) => {
    const fakeDB = [];
    fakeDB.push({
        title: 'Island house', description: `Our rearest listing. Green house in the middle of the lake Hgtamik`, price: `256`, image: '/img/1.jpg',beds: '2',icon2:'/img/house.jpg', icon4:'/img/wifi.jpg', icon7:'/img/bed.jpg', icon8:'/img/beds.jpg', icon10:'/img/pet.jpg', icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'Student unit by designer', description: `Perfect unit for the student who wishes studing get away`, price: `178`, image: '/img/2.jpg',beds: '4', icon2:'/img/house.jpg',
        icon4:'/img/wifi.jpg', 
        icon5:'/img/access.jpg',
        icon7:'/img/bed.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'Family cabin', description: `Family cabin for a big-medium-small size family. Bring them all`, price: `165`, image: '/img/3.jpg',beds: '6',icon1: '/img/hotel.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon5:'/img/access.jpg',
        icon7:'/img/bed.jpg', 
        icon8:'/img/beds.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'Hobbit house 1', description: `Lord of the rings? fan This is a vacation place just for you`, price: `165`, image: '/img/4.jpg',beds: '6',icon1: '/img/hotel.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon7:'/img/bed.jpg', 
        icon8:'/img/beds.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'High and awesome', description: `Stylish designer house just in the heart of the city`, price: `298`, image: '/img/5.jpg',beds: '6',icon2:'/img/house.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon7:'/img/bed.jpg', 
        icon10:'/img/pet.jpg'
    });
    fakeDB.push({
        title: 'On the cliff', description: `Get way in the middle of the nowhere. Exclusive opportunity to relax`, price: `312`, image: '/img/6.jpg',beds: '3', icon2:'/img/house.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon8:'/img/beds.jpg', 
        icon10:'/img/pet.jpg'
    });
    fakeDB.push({
        title: 'Stylish container', description: `Great opportunity to explore the nature, relax and meditate`, price: `158`, image: '/img/7.jpg',beds: '2',icon2:'/img/house.jpg',
        icon7:'/img/bed.jpg', 
        icon9:'/img/tent.jpg', 
        icon10:'/img/pet.jpg'
    });
    fakeDB.push({
        title: 'Bus or RV?', description: `Cosy and stylish, simple but well equipped, this bus is what you need for the weekend`, price: `121`, image: '/img/8.jpg',beds: '2', icon4:'/img/wifi.jpg', 
        icon7:'/img/bed.jpg', 
        icon8:'/img/beds.jpg', 
        icon9:'/img/tent.jpg', 
        icon10:'/img/pet.jpg'
    });
    fakeDB.push({
        title: 'The perfect bubble', description: `Just under clear skies of Province Arkadamia you can find this perfect bubble`, price: `499`, image: '/img/9.jpg',beds: '2', icon1: '/img/hotel.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon6:'/img/concierge.jpg', 
        icon8:'/img/beds.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'Hobbit house 2', description: `Lord of the rings? fan This is a vacation place just for you`, price: `108`, image: '/img/10.jpg',beds: '2', icon2:'/img/house.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon8:'/img/beds.jpg', 
        icon9:'/img/tent.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'Luxurus villa', description: `Spa and pool, gym and sauna, this are only few to be found there`, price: `725`, image: '/img/11.jpg',beds: '12',icon2:'/img/house.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon5:'/img/access.jpg',
        icon6:'/img/concierge.jpg', 
        icon7:'/img/bed.jpg', 
        icon8:'/img/beds.jpg', 
        icon11:'/img/ccard.jpg'
    });
    fakeDB.push({
        title: 'Perfect nature cabin', description: `Great opportunity to explore the nature, relax and meditate`, price: `219`, image: '/img/12.jpg',beds: '3',icon2:'/img/house.jpg',
        icon5:'/img/access.jpg',
        icon7:'/img/bed.jpg', 
        icon10:'/img/pet.jpg'
    });    
    fakeDB.push({
        title: 'Play house', description: `Your kids deserve a vacation of thier own? We have an offer for them`, price: `12`, image: '/img/13.jpg',beds: '1',icon10:'/img/pet.jpg'
    });    
    fakeDB.push({
        title: 'Hobbit house 3', description: `Lord of the rings? fan This is a vacation place just for you`, price: `188`, image: '/img/14.jpg',beds: '8',icon1: '/img/hotel.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon5:'/img/access.jpg',
        icon6:'/img/concierge.jpg', 
        icon8:'/img/beds.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });
        fakeDB.push({
        title: 'Your private cabin in jungle', description: `Great opportunity to explore the nature, relax and meditate`, price: `169`, image: '/img/15.jpg',beds: '2',icon1: '/img/hotel.jpg',
        icon3:'/img/taxi.jpg', 
        icon4:'/img/wifi.jpg', 
        icon6:'/img/concierge.jpg', 
        icon7:'/img/bed.jpg', 
        icon9:'/img/tent.jpg', 
        icon10:'/img/pet.jpg', 
        icon11:'/img/ccard.jpg'
    });   
    res.render("products", {
        title: "Listings",
        headingInfo: "Listings Page",
        products: fakeDB
    });
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Web server is up and running`)
})
