var passCatModel = require('../../modules/password_category');
var passModel = require('../../modules/add_password');
var getPassCat= passCatModel.find({},{'password_category':1,'_id':1});
const mongoose = require('mongoose');

exports.addNewPassword=function(req,res,next){
    var passCategory=req.body.pass_cat;
    var projectName=req.body.project_name;
    var passwordDetails=req.body.password_detail;
    
    var passDetails=new passModel({
        _id:mongoose.Types.ObjectId(),
        password_category:passCategory,
        project_name:projectName,
        password_detail:passwordDetails  
      });

    passDetails.save()
    .then(doc=>{
        res.status(201).json({
            message:"Password Inserted Successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    }
// get all password controller
    exports.getAllPassword=function(req,res,next){

        passModel
        .find()
        .select("password_category project_name password_detail")
        .populate("password_category", "password_category")
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

    // get password by id

    exports.getPasswordByID=function(req,res,next){

        var id=req.params.id;
    
        passModel.findById(id)
        .select("password_category project_name password_detail")
        .populate("password_category", "password_category")
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

        // delete password controller

        exports.deletePassword=function(req,res,next){
            var password_id=req.body.password_id;
            passModel.findByIdAndRemove(password_id)
              .then(doc=>{
               res.status(201).json({
                   message:"Password Deleted Successfully",
                   results:doc
               });
              })
              .catch(err=>{
                  res.json(err)
              })
           
           }