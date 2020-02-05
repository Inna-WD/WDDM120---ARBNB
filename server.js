const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');





app.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        headingInfo: "Home Page",
        randomContent: "Lorem Ipsum"
    });
});


app.get("/sms", (req, res) => {
    res.render("sms", {
        title: "SMS Page",

    });
});

app.post("/sms", (req, res) => {
req.body.firstName

});




const accountSid = 'e48fe1c9c89a23308600530343690c22';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: '${req.body.message}',
     from: '+16036050011',
     to: '${req.body.number}'.
   })
  .then(message => {
      
    
    console.log(message.sid)});



const PORT = 3000;
app.listen(3000, () => {
    console.log(`Web server is up and running`)
})
