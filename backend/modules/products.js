const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var dburl="mongodb+srv://mogndbuser:search123@cluster0-ufuff.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dburl, {useNewUrlParser: true, useCreateIndex: true,});var conn =mongoose.Collection;
var productSchema =new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    product_name: {type:String,
        required: true,
        },
   price: {type:Number, 
            required: true,
           },
   quantity: {type:Number, 
            required: true,
           },
   image:{type:String, required:true},
    date:{
        type: Date, 
        default: Date.now }
});
productSchema.plugin(mongoosePaginate);
var productModel = mongoose.model('Products', productSchema);
module.exports=productModel;