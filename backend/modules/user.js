const mongoose = require('mongoose');
const dotenv = require('dotenv');
var dburl="mongodb+srv://mogndbuser:search123@cluster0-ufuff.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dburl, {useNewUrlParser: true, useCreateIndex: true,});var conn =mongoose.Collection;
var userSchema =new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

	email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type:String, 
        required: true
    },
    profileImage:{
        type:String,
    },
    date:{
        type: Date, 
        default: Date.now }
});

var userModel = mongoose.model('users', userSchema);
module.exports=userModel;