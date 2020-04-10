const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({path:"./config/keys.env"});
const app = express();

//This allows express to make my static content available from the public
app.use(express.static('public'));



//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//parse application
app.use(bodyParser.urlencoded({ extended: false }))

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");
const featuredController = require("./controllers/featured");
//map each controller to the app object



mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
console.log(`Connected to MongoDB`);
})
.catch(err=>console.log(`Error occured when connected to db ${err}`));




app.use("/",generalController);
app.use("/",productController);
app.use("/",featuredController);

///sets up server
const PORT = process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Web Server is up and running`);    
});