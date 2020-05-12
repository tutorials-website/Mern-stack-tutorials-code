var express = require('express');
var router = express.Router();
var multer  = require('multer');
var checkAuth=require('./middleware/auth');
const productsController=require('./controller/products');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })

  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
       cb(null,true);
   }else{
       cb(null, false);
   }

  }

var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

// image path
// limit: 5mb
// filter : png, jpeg,jpg


router.get("/getAllProducts",checkAuth,productsController.getAllProducts);


// Add New Category Route
router.post("/add",upload.single('productImage'),checkAuth,productsController.addProduct);

module.exports=router;