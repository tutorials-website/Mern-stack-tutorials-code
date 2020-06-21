var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var multer  = require('multer');
var checkAuth=require('./middleware/auth');
var userModel = require('../modules/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });

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



router.post("/login",function(req,res,next){

    var username=req.body.username;
    userModel.find({username:username})
    .exec()
    .then(user=>{
        if(user.length<1){
            res.status(404).json({
                message:"Auth Failed",
            });
        }else{
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
               if(err){
                res.json({
                    message:"Auth Failed",
                });
               }
               if(result){
            
            var token=jwt.sign(
                    {
                 username:user[0].username,
                 userid:user[0]._id
                }, 
               'secret', 
                { 
                    
                    expiresIn:"8h"
                }
               );
                res.status(200).json({
                    message:"User Found",
                    token:token
                });
               }else{
                res.json({
                    message:"Auth Failed",
                });
               }
            });
        
    }
    })
    .catch(err=>{
        res.json({
            error:err
        });
    })


    });

router.post("/signup",function(req,res,next){

    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var confirmPassword=req.body.confirmpassword;
    var profileimage=null;

   if(password !==confirmPassword){
    res.json({
        message:"Password Not Matched!",
    });

   }else{
    bcrypt.hash(password, 10, function(err, hash) {
 
        if(err){
            return res.json({
                message:"Something Wrong, Try Later!",
                error:err
            });
        }else{

           // console.log(hash);
            var userDetails=new userModel({
                _id:mongoose.Types.ObjectId(),
                username:username,
                email:email,
                password:hash,
                profileimage:profileimage
            });
        
            userDetails.save()
            .then(doc=>{
                res.status(201).json({
                    message:"User Registered Successfully",
                    results:doc
                });
            })
            .catch(err=>{
                res.json(err);
            });
        }
        
    });

   }
   
    });

    router.get("/getUserDetails/:userid",checkAuth,function(req,res,next){

        var id=req.params.userid;
        var getUserDetails= userModel.find({_id:id},{'email':1,'profileImage':1});
        getUserDetails.exec()
        .then(data=>{
            res.status(200).json({
                message:"OK",
                results:data
            });
        })
        .catch(err=>{
            res.json(err);
        })
        
        
        });

 router.post("/update-profile/",upload.single('profileImage'),checkAuth,function(req,res,next){

    var id=req.body.user_id;
     var profilePic= req.file.path;
     userModel.findById(id,function(err,data){
 
      data.profileImage=profilePic?profilePic:data.profileImage;
     
        data.save()
          .then(doc=>{
             res.status(201).json({
                 message:"Profile Image Updated Successfully",
                 results:doc
             });
          })
          .catch(err=>{
              res.json(err);
          })
         
     });
 
 });

module.exports=router;