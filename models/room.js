const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
title:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
price:{
    type:number,
    require:true
}
  }
});