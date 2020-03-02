const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

//This allows express to make my static content available from the public
app.use(express.static('public'));
app.use("/")


//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//parse application
app.use(bodyParser.urlencoded({ extended: false }))

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");

//map each controller to the app object

app.use("/",generalController);
app.use("/product",productController);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Web server is up and running`)
})
