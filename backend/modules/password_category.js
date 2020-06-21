const mongoose = require('mongoose');
var dotenv = require('dotenv');
var dburl="mongodb+srv://mogndbuser:search123@cluster0-ufuff.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dburl, {useNewUrlParser: true, useCreateIndex: true,});var conn =mongoose.Collection;
var passcatSchema =new mongoose.Schema({
    password_category: {type:String, 
        required: true,
        },
  user_id:{
      type:String,
      required:true
  },
    date:{
        type: Date, 
        default: Date.now }
});

var passCateModel = mongoose.model('password_categories', passcatSchema);
module.exports=passCateModel;