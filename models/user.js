const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//This indicates the shape of the documents that will be entering the database
  const userSchma = new Schema({

    firstName:
    {
        type:String,
        required:false
    },

    lastName:
    {
        type:String,
        required:false
    },

    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    profilePic:
    {
        type:String,
        required:false
    },
    dateCreated:
    {
        type:Date,
        default:Date.now()
    }
  });



userSchma.pre("save",function(next)
{
    bcrypt.genSalt(10)
    .then((salt)=>{
        bcrypt.hash(this.password,salt)
        .then((encryptPassword)=>{
            this.password = encryptPassword;
            next();
        })
        .catch(err=>console.log(`Error occured ${err}`));
    })
    .catch(err=>console.log(`Error occured ${err}`));
})
 const userModel = mongoose.model('User', userSchma);

 module.exports = userModel;