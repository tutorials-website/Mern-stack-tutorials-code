var productModel = require('../../modules/products');
const mongoose = require('mongoose');

exports.getAllProducts=(req,res,next)=>{

    productModel
    .find()
    .select("product_name price quantity image")
    .exec()
.then(data=>{
    res.status(200).json({
        message:"OK",
        results:data
    });
})
.catch(err=>{
    res.json(err);
})
}
// add product controller
exports.addProduct=function(req,res,next){
   

    var product_name=req.body.name;
    var price=req.body.price;
    var quantity=req.body.quantity;

    var productDetails=new productModel({
        _id:mongoose.Types.ObjectId(),
        product_name:product_name,
        price:price,
        quantity:quantity,
        image:req.file.path
    });

    productDetails.save()
    .then(doc=>{
        res.status(201).json({
            message:"Product Inserted Successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    
    
    }