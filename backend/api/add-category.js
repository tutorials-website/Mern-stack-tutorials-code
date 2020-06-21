var express = require('express');
var router = express.Router();
var passCatModel = require('../modules/password_category');
var passModel = require('../modules/add_password');
var getPassCat= passCatModel.find({},{'password_category':1,'_id':1});
const mongoose = require('mongoose');
var checkAuth=require('./middleware/auth');
const categoryController=require('./controller/category');
const passwordController=require('./controller/password');
// get All Category Route
router.get("/", function(req,res,next){
res.send('hello api');
});
router.get("/getCategory/:userid",checkAuth,categoryController.getCategory);

// Add New Category Route
router.post("/add-category",checkAuth,categoryController.addCategory);

// add or Update Category Route
router.put("/add-update-category/:id",checkAuth,categoryController.addUpdateCategory);

// update records route
router.patch("/update-category/",checkAuth,categoryController.updateCategory);

// delete records route
router.delete("/delete-category/",checkAuth,categoryController.deleteCategory);

// add new password 
router.post("/add-new-password/",checkAuth,passwordController.addNewPassword);

    // get All Password Details Route
router.get("/getAllPasswords",checkAuth,passwordController.getAllPassword);

router.get("/getPaswwordByID/:id",checkAuth,passwordController.getPasswordByID);

// delete Password records route
router.delete("/delete-password/",checkAuth,passwordController.deletePassword);

module.exports=router;